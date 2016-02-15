begin;
set local role admin_role;


-- get_all
select card_id from cards_orset as s
where s.user_id = uid
    and s.card_id = cid
    and s.tombstone = false
group by card_id;


commit;








