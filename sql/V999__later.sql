---- when removing a user we don't care their own set of cards
-- alter table cards_orset add foreign key (user_id) references users(id)       on delete cascade,
-- alter table cards_orset add foreign key (card_id) references all_cards(id)   on delete cascade,

---- leave these cards when removing a user or prev revision
-- alter table all_cards add foreign key (prev_revision_id)  references all_cards(id)   on delete set null,
-- alter table all_cards add foreign key (created_by)        references users(id)       on delete set null,

