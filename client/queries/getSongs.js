import gql from "graphql-tag";

const GET_SONGS = gql`
	query GetSongs {
		songs {
			id
			title
		}
	}
`;

export default GET_SONGS;
