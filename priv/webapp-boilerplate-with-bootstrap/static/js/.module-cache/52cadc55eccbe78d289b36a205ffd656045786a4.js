require.config({
    paths: {
        "text": "libs/requirejs-text/text",
        /* "jquery": "libs/jquery/dist/jquery",
           "bootstrap": "libs/bootstrap/dist/js/bootstrap", */
        "react": "libs/react/react-with-addons",
        "react-bootstrap": "libs/react-bootstrap/react-bootstrap",
    }
});

require(
    [
        /* 'jquery',
           'bootstrap', */
        'react',
        'react-bootstrap'
    ],
    function(
        /* jquery,
           Bootstrap, */
        React,
        ReactBootstrap) {
            "use strict";


            var Grid = ReactBootstrap.Grid;        
            var Row = ReactBootstrap.Row;        
            var Col = ReactBootstrap.Col;        
            var Panel = ReactBootstrap.Panel;
            var CommentBox = React.createClass({displayName: "CommentBox",
                render: function() {
                    return (
                        React.createElement("div", {className: "commentBox"}, 
                            "fuck you", 
                            React.createElement(Grid, {fluid: true}, 
                                React.createElement(Row, null, 
                                    React.createElement(Col, {xs: 12}, React.createElement(Panel, null, "mutherfuckers")), 
                                    React.createElement(Col, {xs: 12, md: 8}, React.createElement(Panel, null, "my 1")), 
                                    React.createElement(Col, {xs: 6, md: 4}, React.createElement(Panel, null, "my 2"))
                                )
                            )
                        )
                    );
                }
                
            });

            React.render(
                React.createElement(CommentBox, null),
                document.getElementById('content1')
            );
    });

