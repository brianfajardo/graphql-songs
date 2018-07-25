import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

// Components
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

// GraphQL Queries
import GET_SONG_BY_ID from "../queries/getSongById";

const SongDetail = ({ data, params }) => {
	if (data.loading) {
		return <h1 className="center">Loading...</h1>;
	}

	return (
		<div>
			<Link to="/" className="btn red">
				Back
			</Link>
			<h3 className="center">{data.song.title}</h3>
			<LyricList lyrics={data.song.lyrics} />
			<LyricCreate songId={params.id} />
		</div>
	);
};

export default graphql(GET_SONG_BY_ID, {
	// GraphQL intercepts props object
	options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
