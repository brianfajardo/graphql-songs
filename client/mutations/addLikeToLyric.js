import gql from "graphql-tag";

const ADD_LIKE_TO_LYRIC = gql`
	mutation LikeLyric($id: ID!) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default ADD_LIKE_TO_LYRIC;
