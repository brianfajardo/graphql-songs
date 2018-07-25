import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// Components
import App from "./components/App";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

// Styles
import "./style/style.css";

// Apollo setup
const client = new ApolloClient({
	// Automatic cache updates
	dataIdFromObject: object => object.id
});

const RootJSX = () => (
	<ApolloProvider client={client}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SongList} />
				<Route path="songs/new" component={SongCreate} />
				<Route path="songs/:id" component={SongDetail} />
			</Route>
		</Router>
	</ApolloProvider>
);

ReactDOM.render(<RootJSX />, document.querySelector("#root"));
