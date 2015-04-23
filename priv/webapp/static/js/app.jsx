var NotFound = React.createClass({
    render: function() {
        return (
            <div className="my-NotFound">
                <h2>NotFound</h2>
            </div>
        );
    }
});


var Dashboard = React.createClass({
    render: function() {
        return (
            <div className="my-Dashboard">
                <h2>Dashboard</h2>
            </div>
        );
    }
});

var DecksCardsView = React.createClass({
    render: function() {
        return (
            <div className="my-DecksCardsView">
                <h2>DecksCardsView</h2>
                <RouteHandler/>
            </div>
        );
    }
});

var DeckList = React.createClass({
    render: function() {
        return (
            <div className="my-DeckList">
                <ul>
                    <li><Link to="Deck" params={{deckId:1}}>Deck 1</Link></li>
                    <li><Link to="Deck" params={{deckId:2}}>Deck 2</Link></li>
                </ul>
            </div>
        );
    }
});

var Deck = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="my-Deck">
                <h3>Deck {this.context.router.getCurrentParams().deckId}</h3>
                <ul>
                    <li><Link to="Card" params={{deckId:this.context.router.getCurrentParams().deckId, cardId:1}}>Card 1</Link></li>
                    <li><Link to="Card" params={{deckId:this.context.router.getCurrentParams().deckId, cardId:2}}>Card 2</Link></li>
                    <li><Link to="Card" params={{deckId:this.context.router.getCurrentParams().deckId, cardId:3}}>Card 3</Link></li>
                </ul>

            </div>
        );
    }
});

var Card = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="my-Card">
                <h3>Deck {this.context.router.getCurrentParams().deckId}</h3>
                <h3>Card {this.context.router.getCurrentParams().cardId}</h3>
            </div>
        );
    }
});



// React.render(
//     <CommentBox />,
//     document.body
// );


var Router = ReactRouter;

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Root = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <h1>menu</h1>
                    <ul>
                        <li><Link to="root">Dashboard</Link></li>
                        <li><Link to="decks">DecksCardsView</Link></li>
                    </ul>
                </header>

                <RouteHandler/>
            </div>
        );
    }
});


/*
   redirect to something instead of <NotFoundRoute handler={NotFound}/>
   <Redirect to="dashboard" />

   /decks
   /decks/123
   /decks/123/cards/456
   we need also /cards/456
 */
var routes = (
    <Route name="root" path="/" handler={Root}>
        <DefaultRoute handler={Dashboard}/>
        <Route name="decks" handler={DecksCardsView}>
            <DefaultRoute handler={DeckList}/>
            <Route name="Deck" path=":deckId" handler={Deck}/>
            <Route name="Card" path=":deckId/cards/:cardId" handler={Card}/>
        </Route>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

// TODO: when inside cordova app, use #/urls, not real ones --- just write this: Router.run(routes, function (Handler) {
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});




