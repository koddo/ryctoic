begin;
set local role admin_role;


create table all_cards (
        id                 uuid primary key default gen_random_uuid(),
        front              text not null,
        back               text not null,
        prev_revision_id   uuid     references all_cards(id)   on delete set null,
        created_by         bigint   references users(id)       on delete set null,
        created_at         timestamptz not null default now(),
        etc                jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' )
        );

create table cards_orset (
        user_id             bigint   not null references users(id)       on delete cascade,
        card_id             uuid     not null references all_cards(id)   on delete cascade,
        unique_identifier   uuid not null default gen_random_uuid(),
        tombstone           boolean not null default false,
        added_at            timestamptz not null default now(),
        removed_at          timestamptz null,
        etc                 jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' ),
        primary key (user_id, card_id, unique_identifier)
        );


commit;


-- fuck auto-save

