import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = props => {
	const renderShows = () => {
		return props.shows.map(showItem => {
			const { show } = showItem;

			return (
				<li key={show.id}>
					<Thumbnail
						image={(show.image && show.image.medium) || undefined}
						caption={show.name}
					/>
				</li>
			);
		});
	};

	return (
		<div>
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
		shows: response.data
	};
};

export default Home;
