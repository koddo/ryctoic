begin;
set local role admin_role;


create table users (
        id                  serial primary key,
        created_at          timestamptz not null default now(),
        etc                 jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' )
        );

insert into app.users(etc) values('{ "name" : "testuser1" }'::jsonb);
insert into app.users(etc) values('{ "name" : "testuser2" }'::jsonb);
insert into app.users(etc) values('{ "name" : "testuser3" }'::jsonb);
insert into app.users(etc) values('{ "name" : "koddo" }'::jsonb);



create table cards (
        id                 uuid primary key default gen_random_uuid(),
        created_at         timestamptz not null default now(),
        created_by         integer  references users(id)     on delete set null,
        front              text not null    constraint card_front_length check ( 0 < char_length(front)  and  char_length(front) <= 1000 ),
        back               text not null    constraint card_back_length  check ( 0 < char_length(back)   and  char_length(back)  <= 1000 ),
        prev_revision_id   uuid     references cards(id)     on delete set null
        );
create unique index cards_content_by_user_unique_idx on cards(created_by, md5(lower(front)), md5(lower(back)));


create table cards_orset (
        user_id                integer  not null references users(id)     on delete cascade,
        due_date               date not null default now(),
        card_id                uuid     not null references cards(id)     on delete cascade,
        added_at               timestamptz not null default now(),
        removed_at             timestamptz default null,
        packed_progress_data   bigint not null,
        primary key (user_id, card_id, added_at)
        );



create table decks (
        id                 uuid primary key default gen_random_uuid(),
        name               text unique not null    constraint deck_name_length check ( (0 < char_length(name)  and  char_length(name) <= 255)
                                                                                   or (char_length(name)=0 and id=uuid_nil()) )
        );

insert into app.decks(id, name) values (uuid_nil(), '');



create table card_decks_orset (
        card_id                    uuid     not null references cards(id)     on delete cascade,
        deck_id                    uuid     not null references decks(id)     on delete cascade,
        added_at                   timestamptz not null default now(),
        removed_at                 timestamptz default null,
        user_id                    integer  not null references users(id)     on delete cascade,
        more_than_one_removed_at   bool not null   default false,
        primary key (user_id, card_id, deck_id, added_at)
        );



create table contexts (
        id                 uuid primary key default gen_random_uuid(),
        url                text unique not null    constraint context_url_length check ( 0 < char_length(url)  and  char_length(url) <= 2000 )
        );



create table card_contexts_orset (
        card_id                uuid     not null references cards(id)        on delete cascade,
        context_id             uuid     not null references contexts(id)     on delete cascade,
        added_at               timestamptz not null default now(),
        removed_at             timestamptz default null,
        user_id                integer  not null references users(id)        on delete cascade,
        more_than_one_removed_at   bool not null   default false,
        primary key (user_id, card_id, context_id, added_at)
        );



commit;










