begin;
set local role admin_role;



create or replace function create_card(the_user_id bigint, the_prev_revision_id uuid, new_front text, new_back text) returns uuid as $$
declare
    new_id uuid;
begin
insert into all_cards(front, back, prev_revision_id, created_by)
    values(new_front, new_back, the_prev_revision_id, the_user_id)
    returning id into new_id;
return new_id;
end;
$$ language plpgsql;



create or replace function add_card(the_user_id bigint, the_card_id uuid) returns void as $$
begin
if not has_card(the_user_id, the_card_id) then
insert into cards_orset(user_id, card_id, added_at, alive)
    values(the_user_id, the_card_id, now(), true);
end if;
end;
$$ language plpgsql;

create or replace function create_and_add_card(the_user_id bigint, the_prev_revision_id uuid, new_front text, new_back text) returns uuid as $$
declare
    the_new_card_id uuid;
begin
select * into the_new_card_id from create_card(the_user_id, the_prev_revision_id, new_front, new_back);
perform add_card(the_user_id, the_new_card_id);
return the_new_card_id;
end;
$$ language plpgsql;



create or replace function remove_card(the_user_id bigint, the_card_id uuid) returns void as $$
begin
update cards_orset set alive = false, removed_at = array_append(removed_at, now())
    where user_id = the_user_id and card_id = the_card_id and alive = true;
end;
$$ language plpgsql;



create or replace function get_ids_of_alive_cards(the_user_id bigint) returns setof record as $$
begin
return query
select card_id from cards_orset as s
where s.user_id = the_user_id
    and s.alive = true
group by card_id;
end;
$$ language plpgsql;

create or replace function get_cards(the_user_id bigint) returns setof cards_orset as $$
begin
return query
select * from cards_orset as s
where s.user_id = the_user_id
    and s.alive = true;
end;
$$ language plpgsql;



create or replace function has_card(the_user_id bigint, the_card_id uuid) returns boolean as $$
begin
return exists(
    select 1 from cards_orset as s
    where s.user_id = the_user_id
        and s.card_id = the_card_id
        and s.alive = true
        );
end;
$$ language plpgsql;



create or replace function edit_card(the_user_id bigint, the_card_id uuid, new_front text, new_back text) returns uuid as $$
declare
   the_new_card_id uuid;
begin
select * into the_new_card_id from create_and_add_card(the_user_id, the_card_id, new_front, new_back);
perform remove_card(the_user_id, the_card_id);
return the_new_card_id;
end;
$$ language plpgsql;





commit;








