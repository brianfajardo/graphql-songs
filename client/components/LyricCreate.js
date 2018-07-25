import React from "react";
import { graphql } from "react-apollo";

// GraphQL Mutations
import ADD_LYRIC_TO_SONG from "../mutations/addLyricToSong";

class LyricCreate extends React.Component {
	state = {
		lyric: ""
	};

	handleInputChange = event => {
		this.setState({ lyric: event.target.value });
	};

	handleLyricSubmit = event => {
		event.preventDefault();
		this.props.mutate({
			variables: {
				content: this.state.lyric,
				songId: this.props.songId
			}
		});

		this.setState({ lyric: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleLyricSubmit}>
				<label>Add a lyric</label>
				<input
					type="text"
					value={this.state.lyric}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

export default graphql(ADD_LYRIC_TO_SONG)(LyricCreate);
