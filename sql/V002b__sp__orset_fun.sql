begin;
set local role admin_role;



create or replace function create_card(new_front text, new_back text, the_prev_revision_id uuid, created_by_user_id bigint) returns uuid as $$
declare
    new_id uuid;
begin
insert into all_cards(front, back, prev_revision_id, created_by)
    values(new_front, new_back, the_prev_revision_id, created_by_user_id)
    returning id into new_id;
    return new_id;
end;
$$ language plpgsql;



create or replace function add_card(for_user_id bigint, the_card_id uuid) returns void as $$
begin
insert into cards_orset(user_id, card_id)
    values(for_user_id, the_card_id);
end;
$$ language plpgsql;



create or replace function remove_card(for_user_id bigint, the_card_id uuid) returns void as $$
begin
perform remove_card(for_user_id, the_card_id, 'untracked_device');
end;
$$ language plpgsql;

create or replace function remove_card(for_user_id bigint, the_card_id uuid, the_device text) returns void as $$
declare
    now_pair timestamp_device_pair;
begin
    now_pair := (now(), the_device);
update cards_orset as s set tombstone = true, removed_at = array_append(removed_at, now_pair)
where s.user_id = for_user_id and s.card_id = the_card_id and tombstone = false;
end;
$$ language plpgsql;



create or replace function get_all_cards(for_user_id bigint) returns setof record as $$
begin
return query
select card_id from cards_orset as s
where s.user_id = for_user_id
    and s.tombstone = false
group by card_id;
end;
$$ language plpgsql;



commit;








