begin;
set local role admin_role;


create table all_cards (
        id                 uuid primary key default gen_random_uuid(),
        front              text not null,
        back               text not null,
        prev_revision_id   uuid     references all_cards(id)   on delete set null,
        created_by         bigint   references users(id)       on delete set null,
        created_at         timestamptz not null default now()
        );



create table cards_orset (
        user_id             bigint   not null references users(id)       on delete cascade,
        card_id             uuid     not null references all_cards(id)   on delete cascade,
        unique_identifier   uuid not null default gen_random_uuid(),
        added_at            timestamptz not null,
        removed_at          timestamptz[] default null,
        due_date            timestamptz not null default now(),
        easiness_factor     smallint not null default 250,
        prev_response       enum not null default new_card,
        prev_interval       integer not null default 0,
        num_of_fails        smallint default 0,
        primary key (user_id, card_id, unique_identifier),   -- ??????????? added_at ?????????????
        check ((alive is true and removed_at is null) or (alive is false and removed_at is not null))
        );



insert into app.users(identity_provider, provided_id) values('test_identity_provider', '1');
insert into app.users(identity_provider, provided_id) values('test_identity_provider', '2');


insert into app.users(identity_provider, provided_id) values('test_identity_provider', 'koddo');


commit;



