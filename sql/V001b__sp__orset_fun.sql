begin;
set local role admin_role;



create or replace function create_card(the_user_id integer, the_prev_revision_id uuid, new_front text, new_back text) returns uuid as $$
declare
    new_id uuid;
begin
insert into all_cards(front, back, prev_revision_id, created_by)
    values(new_front, new_back, the_prev_revision_id, the_user_id)
    returning id into new_id;
return new_id;
end;
$$ language plpgsql;



create or replace function add_card(the_user_id integer, the_card_id uuid, the_due_date date, the_packed_progress_data bigint) returns void as $$
begin
if not has_card(the_user_id, the_card_id) then
insert into cards_orset(user_id, card_id, added_at, due_date, packed_progress_data)
    values(the_user_id, the_card_id, now(), the_due_date, the_packed_progress_data);
end if;
end;
$$ language plpgsql;

create or replace function create_and_add_card(the_user_id integer, the_prev_revision_id uuid, new_front text, new_back text) returns uuid as $$
declare
    the_new_card_id uuid;
begin
-- TODO: in create_and_add_card() make all_cards.created_at = cards_orset.added_at
select * into the_new_card_id from create_card(the_user_id, the_prev_revision_id, new_front, new_back);
perform add_card(the_user_id, the_new_card_id);
return the_new_card_id;
end;
$$ language plpgsql;



create or replace function remove_card(the_user_id integer, the_card_id uuid) returns void as $$
begin
-- TODO: when removed_at is not null, set more_than_one_removed_at and add additional removed_at
update cards_orset set removed_at = now()
    where user_id = the_user_id and card_id = the_card_id and removed_at is null;
end;
$$ language plpgsql;



create or replace function get_ids_of_alive_cards(the_user_id integer) returns setof record as $$
begin
return query
select card_id from cards_orset as s
where s.user_id = the_user_id
    and s.removed_at is null
group by card_id;
end;
$$ language plpgsql;

create or replace function get_cards(the_user_id integer) returns setof cards_orset as $$
begin
return query
select * from cards_orset as s
where s.user_id = the_user_id
    and s.removed_at is null;
end;
$$ language plpgsql;



create or replace function has_card(the_user_id integer, the_card_id uuid) returns boolean as $$
begin
return exists(
    select 1 from cards_orset as s
    where s.user_id = the_user_id
        and s.card_id = the_card_id
        and s.removed_at is null
        );
end;
$$ language plpgsql;



create or replace function edit_card(the_user_id integer, the_card_id uuid, new_front text, new_back text, due_date date, packed_progress_data bigint) returns uuid as $$
declare
   the_new_card_id uuid;
begin
-- TODO: transaction?
select * into the_new_card_id from create_and_add_card(the_user_id, the_card_id, new_front, new_back);
perform remove_card(the_user_id, the_card_id);
return the_new_card_id;
end;
$$ language plpgsql;


create or replace function pack_progress_data(
        easiness_factor real,
        prev_interval integer,
        prev_response integer,
        num_of_lapses integer,
        prev_response_was_made_in_mobile_app boolean,
        more_than_one_removed_at boolean,
        prev_seconds_spent_on_card integer
        )
    returns bigint as $$
declare
    ef       bit(12)  := ((easiness_factor - 1) * 512)::integer::bit(12);
    pri      bit(14)  := prev_interval::bit(14);
    prr      bit(3)   := prev_response::bit(3);
    nol      bit(6)   := num_of_lapses::bit(6);
    mobile   bit(1)   := prev_response_was_made_in_mobile_app::integer::bit(1);
    multrem  bit(1)   := more_than_one_removed_at::integer::bit(1);
    prs      bit(15)  := prev_seconds_spent_on_card::bit(15);
    padding  bit(12)  := 0::bit(12);
begin
-- if easiness_factor < 0 or easiness_factor > ??? throw exception;
-- if prev_interval < 0 throw exception;
-- if prev_response < 0 or prev_response > 7 throw exception;
-- if num_of_fails < 0 or num_of_fails > 15 throw exception;
return (ef || pri || prr || nol || mobile || multrem || prs || padding)::bit(64)::bigint;
end;
$$ language plpgsql;


create or replace function unpack_progress_data(
        in packed_bigint bigint,
        out easiness_factor real,
        out prev_interval integer,
        out prev_response integer,
        out num_of_lapses integer,
        out prev_response_was_made_in_mobile_app boolean,
        out more_than_one_removed_at boolean,
        out prev_seconds_spent_on_card integer
        )
    returns record as $$
declare
    b        bit(64)  := packed_bigint::bit(64);
    ef       bit(12)  := (b       )::bit(12);
    pri      bit(14)  := (b <<  12)::bit(14);   -- 12
    prr      bit(3)   := (b <<  26)::bit(3);    -- 12+14
    nol      bit(6)   := (b <<  29)::bit(6);    -- 12+14+3
    mobile   bit(1)   := (b <<  35)::bit(1);    -- 12+14+3+6
    multrem  bit(1)   := (b <<  36)::bit(1);    -- 12+14+3+6+1
    prs      bit(15)  := (b <<  37)::bit(15);   -- 12+14+3+6+1+1
-- padding  bit(14)
begin
    easiness_factor := 1.0 + ef::integer::real/512;
    prev_interval := pri::integer;
    prev_response := prr::integer;
    num_of_lapses := nol::integer;
    prev_response_was_made_in_mobile_app := mobile::integer::boolean;
    more_than_one_removed_at := multrem::integer::boolean;
    prev_seconds_spent_on_card := prs::integer;
end;
$$ language plpgsql;



commit;








