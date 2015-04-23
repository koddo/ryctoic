var NotFound = React.createClass({
    render: function() {
        return (
            <div className="my-NotFound">
                <h3>NotFound</h3>
            </div>
        );
    }
});


var Dashboard = React.createClass({
    render: function() {
        return (
            <div className="my-Dashboard">
                <h3>Dashboard</h3>
            </div>
        );
    }
});

var DeckList = React.createClass({
    render: function() {
        return (
            <div className="my-DeckList">
                <h3>DeckList</h3>
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
                        <li><Link to="Root">Dashboard</Link></li>
                        <li><Link to="DeckList">DeckList</Link></li>
                    </ul>
                </header>

                <h2>routed part</h2>
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
   /cards/456
 */
var routes = (
    <Route name="Root" path="/" handler={Root}>
        <DefaultRoute handler={Dashboard}/>
        <Route path="decks" name="DeckList" handler={DeckList}/>
        <Route path="decks/:deckId" name="Deck" handler={Deck}/>
        <Route path="decks/:deckId/cards/:cardId" name="Card" handler={Card}/>
        <Route path="cards/:cardId" name="CardWithoutDeck" handler={Card}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

// TODO: when inside cordova app, use #/urls, not real ones --- just write this: Router.run(routes, function (Handler) {
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});




