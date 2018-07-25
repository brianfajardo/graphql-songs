import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

// GraphQL Queries
import GET_SONGS from "../queries/getSongs";

// GraphQL Mutations
import DELETE_SONG_BY_ID from "../mutations/deleteSong";

class SongList extends React.Component {
	handleSongDelete = id => {
		this.props
			.mutate({ variables: { id } })
			.then(() => this.props.data.refetch())
			.catch(error => console.log("Error! \n", error));
	};

	renderSongs = () => {
		return this.props.data.songs.map(({ id, song, title }) => (
			<li key={id} className="collection-item">
				<Link to={`/songs/${id}`}>{title}</Link>
				<i className="material-icons" onClick={() => this.handleSongDelete(id)}>
					delete
				</i>
			</li>
		));
	};

	render() {
		if (this.props.data.loading) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h1 className="center">Song List</h1>
				<ul className={"collection"}>{this.renderSongs()}</ul>
				<Link to="/songs/new" className="btn-floating btn-large red right">
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

const SongListWithOneGraphQL = graphql(GET_SONGS)(SongList);
const SongListWithTwoGraphQL = graphql(DELETE_SONG_BY_ID)(
	SongListWithOneGraphQL
);

export default SongListWithTwoGraphQL;
