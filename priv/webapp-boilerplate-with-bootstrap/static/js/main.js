require.config({
    paths: {
        "text": "libs/requirejs-text/text",
        /* "jquery": "libs/jquery/dist/jquery",
           "bootstrap": "libs/bootstrap/dist/js/bootstrap", */
        "react": "libs/react/react-with-addons",
        "react-bootstrap": "libs/react-bootstrap/react-bootstrap",
        "react-responsive": "libs/react-responsive/dist/react-responsive"
    }
});

require(
    [
        /* 'jquery',
           'bootstrap', */
        'react',
        'react-bootstrap',
        'react-responsive'
    ],
    function(
        /* jquery,
           Bootstrap, */
        React,
        ReactBootstrap,
        ReactResponsive
    ) {
        "use strict";
        
        /////////////////////////////////

        var Grid = ReactBootstrap.Grid;        
        var Row = ReactBootstrap.Row;        
        var Col = ReactBootstrap.Col;        
        var Panel = ReactBootstrap.Panel;
        var MediaQuery = ReactResponsive.MediaQuery;
        var CommentBox = React.createClass({displayName: "CommentBox",
            render: function() {
                return (
                    React.createElement("div", {className: "commentBox"}, 
                        "123", 
                        React.createElement(MediaQuery, {query: "(min-device-width: 1000px)"}, 
                            React.createElement("div", null, "You also have a huge screen")
                        ), 

                        React.createElement(Grid, {fluid: true}, 
                            React.createElement(Row, null, 
                                React.createElement(Col, {xs: 4, className: "myleft"}, React.createElement(Panel, null, "456")), 
                                React.createElement(Col, {xs: 8, className: "myright"}, React.createElement(Panel, null, "mutherfuckers"))
                            )
                        )
                    )
                );
            }
            
        });

        React.render(
            React.createElement(CommentBox, null),
            /* document.body */
            document.getElementById('content1')
        );


        /////////////////////////////////
    });

