import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import CustomError from '../_error';

const Home = ({ shows, country, errorStatus }) => {
	if (errorStatus) {
		return <CustomError />;
	}

	const renderShows = () => {
		return shows.map((showItem, index) => {
			const { show } = showItem;

			// localhost:3000/country/showId
			return (
				<li key={index}>
					<Thumbnail
						image={(show.image && show.image.medium) || undefined}
						caption={show.name}
						as={`/${country}/${show.id}`}
						href={`/[country]/[showId]`}
					/>
				</li>
			);
		});
	};

	return (
		<div className="home">
			<ul className="shows-grid">{renderShows()}</ul>
			<style jsx>{`
				.shows-grid {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 10px;
				}
			`}</style>
		</div>
	);
};

Home.getInitialProps = async context => {
	const country = context.query.country || 'us';

	try {
		const response = await axios.get(
			`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
		);

		return {
			shows: response.data,
			country
		};
	} catch (error) {
		return {
			errorStatus: error.response ? error.response.status : 500
		};
	}
};

export default Home;
