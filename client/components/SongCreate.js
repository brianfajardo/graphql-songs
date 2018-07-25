import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

// GraphQL Queries
import GET_SONGS from "../queries/getSongs";

// GraphQL Mutations
import ADD_SONG from "../mutations/addSong";

class SongCreate extends React.Component {
	state = {
		title: ""
	};

	handleInputChange = event => {
		this.setState({ title: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		this.props
			.mutate({
				variables: {
					title: this.state.title
				},
				refetchQueries: [{ query: GET_SONGS }]
			})
			.then(() => hashHistory.push("/"))
			.catch(error => console.log("error! \n", error));
	};

	render() {
		return (
			<div>
				<h3>Create a new song</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Song Title:</label>
					<input onChange={this.handleInputChange} value={this.state.title} />
					<Link to="/" className="btn left red">
						Back
					</Link>
					<button type="submit" className="btn right green">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default graphql(ADD_SONG)(SongCreate);
