import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({ shows, country }) => {
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
					list-style-type: none;
					padding: 0;
					margin: 0;
				}
			`}</style>
		</div>
	);
};

Home.getInitialProps = async context => {
	const country = context.query.country || 'us';
	const response = await axios.get(
		`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
	);

	return {
		shows: response.data,
		country
	};
};

export default Home;
