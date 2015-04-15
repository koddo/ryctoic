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
        var CommentBox = React.createClass({
            render: function() {
                return (
                    <div className="commentBox">
                        123
                        <MediaQuery query='(min-device-width: 1000px)'>
                            <div>You also have a huge screen</div>
                        </MediaQuery>

                        <Grid fluid={true}>
                            <Row>
                                <Col xs={4} className="myleft"><Panel>456</Panel></Col>
                                <Col xs={8} className="myright"><Panel>mutherfuckers</Panel></Col>
                            </Row>
                        </Grid>
                    </div>
                );
            }
            
        });

        React.render(
            <CommentBox />,
            /* document.body */
            document.getElementById('content1')
        );


        /////////////////////////////////
    });

