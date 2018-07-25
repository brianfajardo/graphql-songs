import React from "react";
import { graphql } from "react-apollo";

// GraphQL Mutations
import ADD_LIKE_TO_LYRIC from "../mutations/addLikeToLyric";

class LyricList extends React.Component {
	handleOnLike = (id, likes) => {
		this.props.mutate({
			variables: { id },
			optimisticResponse: {
				__typename: "Mutation",
				likeLyric: {
					id: id,
					__typename: "LyricType",
					likes: likes + 1
				}
			}
		});
	};

	renderLyrics() {
		return this.props.lyrics.map(({ id, content, likes }) => (
			<li key={id} className="collection-item">
				{content}
				<div className="vote-box">
					<i
						className="material-icons"
						onClick={() => this.handleOnLike(id, likes)}
					>
						thumb_up
					</i>
					{likes}
				</div>
			</li>
		));
	}

	render() {
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}

export default graphql(ADD_LIKE_TO_LYRIC)(LyricList);
