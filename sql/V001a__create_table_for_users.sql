begin;
set local role admin_role;


create table users (
        id                  serial primary key,
        created_at          timestamptz not null default now(),
        etc                 jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' )
        );

insert into app.users(etc) values('{ "name" : "testuser1" }'::jsonb);
insert into app.users(etc) values('{ "name" : "testuser2" }'::jsonb);
insert into app.users(etc) values('{ "name" : "koddo" }'::jsonb);



create table all_cards (
        id                 uuid primary key default gen_random_uuid(),
        front              text not null,
        back               text not null,
        prev_revision_id   uuid     references all_cards(id)   on delete set null,
        created_by         integer  references users(id)       on delete set null,
        created_at         timestamptz not null default now()
        );



create table cards_orset (
        user_id                integer  not null references users(id)       on delete cascade,
        card_id                uuid     not null references all_cards(id)   on delete cascade,
        added_at               timestamptz not null,
        removed_at             timestamptz default null,
        due_date               date not null default now(),
        packed_progress_data   bigint not null default 3458764513820540928,  -- select pack_progress_data(2.5, 0, 0, 0, false, false, 0);
        primary key (user_id, card_id, added_at)
        );



commit;

