var cardsData = {
    "1" : {
        "id" : "1",
        "question" : "radius of earth",
        "answer" : "~6000km"
    },
    "2" : {
    "id" : "2",
        "question" : "first digits of pi",
        "answer" : "3.1415"
    },
    "3" : {
        "id" : "3",
        "question" : "edge of space",
        "answer" : "100km"
    },
    "4" : {
        "id" : "4",
        "question" : "definition of vector space",
        "answer" : "abelian group with multiplication by numbers"
    },
    "5" : {
        "id" : "5",
        "question" : "Euclidian algorithm",
        "answer" : "mod(a, b) = mod(a-b, b)"
    },
    "6" : {
        "id" : "6",
        "question" : "how many bases in vector space?",
        "answer" : "(q^n - 1) * (q^n - q) * ... * (q^n - q^{n-1})"
    }
};

var decksData = {
    "1" : {
        "id" : "1",
        "name" : "random facts",
        "cards" : [ "1", "2", "3"]
    },
    "2" : {
        "id" : "2",
        "name" : "algebra",
        "cards" : [ "4", "5", "6"]
    }
};


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
        var deckslst = Object.keys(decksData).map(
            function (deckId) {
                return (
                    <li>{decksData[deckId].name} <Link to="Deck" params={{deckId:deckId}}>link</Link></li>
                )
            }
        );
        return (
            <div className="my-DeckList">
                <h3>DeckList</h3>
                <ul>
                    {deckslst}
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
        var deckId = this.context.router.getCurrentParams().deckId;
        var asdf = decksData[deckId].cards;
        var cardslst = Object.keys(cardsData).map(
            function (cardId) {
                if (asdf.indexOf(cardId) >= 0) {
                    return (
                        <li>{cardsData[cardId].question} <Link to="Card" params={{deckId:deckId, cardId:cardId}}>link</Link></li>
                    )
                }
            }
        );
        
        return (
            <div className="my-Deck">
                <h3>Deck {this.context.router.getCurrentParams().deckId}</h3>
                <ul>
                    {cardslst}
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
        var deckId = this.context.router.getCurrentParams().deckId;
        var cardId = this.context.router.getCurrentParams().cardId;
        return (
            <div className="my-Card">
                <h3>Deck {deckId}, Card {cardId}</h3>
                <p>question: {cardsData[cardId].question}</p>
                <p>answer: {cardsData[cardId].answer}</p>
            </div>
        );
    }
});



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




