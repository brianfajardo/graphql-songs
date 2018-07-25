import gql from "graphql-tag";

const DELETE_SONG_BY_ID = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default DELETE_SONG_BY_ID;
