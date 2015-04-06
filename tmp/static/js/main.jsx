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
            var CommentBox = React.createClass({
                render: function() {
                    return (
                        <div className="commentBox">
                            <Grid fluid={true}>
                                <Row>
                                    <Col xs={12}><Panel>mutherfuckers</Panel></Col>
                                    <Col xs={12} md={8}><Panel>my 1</Panel></Col>
                                    <Col xs={6} md={4}><Panel>my 2</Panel></Col>
                                </Row>
                            </Grid>
                        </div>
                    );
                }
                
            });

            React.render(
                <CommentBox />,
                document.getElementById('content1')
            );
    });

