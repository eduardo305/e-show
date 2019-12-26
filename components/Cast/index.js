import Thumbnail from '../../components/Thumbnail';

const Cast = ({ cast }) => {
	const renderCast = () => {
		return cast.map(individual => {
			const { person } = individual;
			return (
				<li key={person.id}>
					<Thumbnail
						image={(person.image && person.image.medium) || undefined}
						caption={person.name}
						small
					></Thumbnail>
				</li>
			);
		});
	};

	return (
		<div className="cast">
			<h2>Cast</h2>
			<ul className="cast__list">{renderCast()}</ul>
			<style jsx>{`
				.cast__list {
					display: flex;
					padding: 0;
					margin: 0;
					list-style-type: none;
					overflow-x: scroll;
				}

				.cast__list > :global(li) {
					margin-right: 10px;
				}
			`}</style>
		</div>
	);
};

export default Cast;
