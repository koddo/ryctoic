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
                            React.createElement(Grid, {fluid: true}, 
                                React.createElement(Row, null, 
                                    React.createElement(Col, {xs: 4, className: "left"}, React.createElement(Panel, null, "mutherfuckers")), 
                                    React.createElement(Col, {xs: 8, className: "right"}, React.createElement(Panel, null, "mutherfuckers")), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck"), 
                                    React.createElement("p", null, "fuck")
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

