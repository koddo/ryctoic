-module(util).

-export([traverse_table_and_show/1]).

%% http://stackoverflow.com/questions/7763745/best-way-to-print-out-mnesia-table
traverse_table_and_show(Table_name)->
    Iterator =  fun(Rec,_)->
                        io:format("~p~n",[Rec]),
                        []
                end,
    case mnesia:is_transaction() of
        true -> mnesia:foldl(Iterator,[],Table_name);
        false -> 
            Exec = fun({Fun,Tab}) -> mnesia:foldl(Fun, [],Tab) end,
            mnesia:activity(transaction,Exec,[{Iterator,Table_name}],mnesia_frag)
    end.
