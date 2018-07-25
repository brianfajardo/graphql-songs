import gql from "graphql-tag";

const GET_SONG_BY_ID = gql`
	query GetSongById($id: ID!) {
		song(id: $id) {
			id
			title
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default GET_SONG_BY_ID;
