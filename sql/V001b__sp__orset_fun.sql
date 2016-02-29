begin;
set local role admin_role;

-- SET plpgsql.extra_warnings TO 'all';
-- SET plpgsql.extra_errors TO 'all';


create or replace function sum(a int, b int)
    returns int as $$
begin
    return a + b;
    end;
    $$ language plpgsql immutable strict;


    -- insert into users(identity_provider, provided_id) values('anonymous', '1');

create or replace function get_all(uid bigint) returns setof record as $$
begin
return query
select card_id from cards_orset as s
where s.user_id = uid                -- and s.card_id = cid
    and s.tombstone = false
group by card_id;
end;
$$ language plpgsql;


-- insert into all_cards(front, back, prev_revision_id, created_by)
--     values('test1', 't1back', null, 1);

-- insert into cards_orset(user_id, card_id)
--     values(1, '84bbbfe1-7f83-40c6-ab6e-a35049c05909'::uuid);

-- add
-- remove
-- contains

-- merge
-- compare



commit;








