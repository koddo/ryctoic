require.config({
    paths: {
        "text": "libs/requirejs-text/text",
        "jquery": "libs/jquery/dist/jquery",
        "bootstrap": "libs/bootstrap/dist/js/bootstrap",
        "react": "libs/react/react-with-addons",
        "react-bootstrap": "libs/react-bootstrap/react-bootstrap",
    }
});

require(
    [
        'jquery',
        'bootstrap',
        'react',
        'react-bootstrap'
    ],
    function(jQuery,
             Bootstrap,
             React,
             ReactBootstrap) {
        "use strict";

        
        var CommentBox = React.createClass({displayName: "CommentBox",
            render: function() {
                return (
                    React.createElement('div', {className: "commentBox"},
                                        "Hello, world! I am a CommentBox."
                                       )
                );
            }
            
        });

        React.render(
            React.createElement(CommentBox, null),
            document.getElementById('content1')
        );
    });

