import axios from 'axios';
import parser from 'html-react-parser';
import Cast from '../../components/Cast';

const ShowDetails = ({ show }) => {
	return (
		<div className="show-details">
			<div
				className="show-details__image"
				style={{ backgroundImage: `url(${show.image.original})` }}
			></div>
			<h1>{show.name}</h1>
			<p>{parser(show.summary)}</p>
			{show._embedded.cast.length > 0 && (
				<Cast cast={show._embedded.cast}></Cast>
			)}

			<style jsx>{`
				.show-details__image {
					height: 200px;
					background-size: cover;
				}
			`}</style>
		</div>
	);
};

ShowDetails.getInitialProps = async ({ query }) => {
	const { showId } = query;
	const response = await axios.get(
		`http://api.tvmaze.com/shows/${showId}?embed=cast`
	);

	return {
		show: response.data
	};
};

export default ShowDetails;
