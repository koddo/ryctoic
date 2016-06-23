begin;
set local role admin_role;



create or replace function pack_progress_data(
        easiness_factor real,
        prev_interval integer,
        prev_response integer,
        num_of_lapses integer,
        prev_response_was_made_in_mobile_app boolean,
        more_than_one_removed_at boolean,
        prev_seconds_spent_on_card integer
        )
    returns bigint as $$
declare
    ef       bit(11)  := ((easiness_factor - 1) * 512)::integer::bit(11);
    pri      bit(14)  := prev_interval::bit(14);
    prr      bit(3)   := prev_response::bit(3);
    nol      bit(6)   := num_of_lapses::bit(6);
    mobile   bit(1)   := prev_response_was_made_in_mobile_app::integer::bit(1);
    multrem  bit(1)   := more_than_one_removed_at::integer::bit(1);
    prs      bit(14)  := prev_seconds_spent_on_card::bit(14);
    padding  bit(14)  := 0::bit(14);
begin
-- if easiness_factor < 0 or easiness_factor > ??? throw exception;
-- if prev_interval < 0 throw exception;
-- if prev_response < 0 or prev_response > 7 throw exception;
-- if num_of_fails < 0 or num_of_fails > 15 throw exception;
return (ef || pri || prr || nol || mobile || multrem || prs || padding)::bit(64)::bigint;
end;
$$ language plpgsql;


create or replace function unpack_progress_data(
        in packed_bigint bigint,
        out easiness_factor real,
        out prev_interval integer,
        out prev_response integer,
        out num_of_lapses integer,
        out prev_response_was_made_in_mobile_app boolean,
        out more_than_one_removed_at boolean,
        out prev_seconds_spent_on_card integer
        )
    returns record as $$
declare
    b        bit(64)  := packed_bigint::bit(64);
    ef       bit(11)  := (b       )::bit(11);
    pri      bit(14)  := (b <<  11)::bit(14);   -- 11
    prr      bit(3)   := (b <<  25)::bit(3);    -- 11+14
    nol      bit(6)   := (b <<  28)::bit(6);    -- 11+14+3
    mobile   bit(1)   := (b <<  34)::bit(1);    -- 11+14+3+6
    multrem  bit(1)   := (b <<  35)::bit(1);    -- 11+14+3+6+1
    prs      bit(14)  := (b <<  36)::bit(14);   -- 11+14+3+6+1+1
    -- padding  bit(14)
begin
    easiness_factor := 1.0 + ef::integer::real/512;
    prev_interval := pri::integer;
    prev_response := prr::integer;
    num_of_lapses := nol::integer;
    prev_response_was_made_in_mobile_app := mobile::integer::boolean;
    more_than_one_removed_at := multrem::integer::boolean;
    prev_seconds_spent_on_card := prs::integer;
end;
$$ language plpgsql;


commit;

