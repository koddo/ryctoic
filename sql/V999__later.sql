-- leave these cards when removing a user or prev revision
-- prev_revision_id references all_cards(id) on delete set null,
-- created_by       references users(id)     on delete set null,

---- when removing a user we don't care their own set of cards
-- user_id references users(id)       on delete cascade,
-- card_id references all_cards(id)   on delete cascade,

-- this way:
-- http://stackoverflow.com/questions/10356484/how-to-add-on-delete-cascade-constraints
-- alter table all_cards
-- drop constraint all_cards__prev_revision_id__fkey,
--     add constraint all_cards__prev_revision_id__fkey foreign key (prev_revision_id) references all_cards(id) on delete cascade;

-- -- old code:
-- alter table all_cards
--     add constraint all_cards__prev_revision_id__fkey   foreign key (prev_revision_id)   references all_cards(id)   on delete set null,
--     add constraint all_cards__created_by__fkey         foreign key (created_by)         references users(id)       on delete set null;
-- alter table cards_orset
--     add constraint cards_orset__user_id__fkey   foreign key (user_id)   references users(id)       on delete cascade,
--     add constraint cards_orset__card_id__fkey   foreign key (card_id)   references all_cards(id)   on delete cascade;
