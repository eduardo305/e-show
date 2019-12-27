import Link from 'next/link';

const Thumbnail = props => {
	const {
		image = 'https://via.placeholder.com/210x295?text=?',
		caption,
		as,
		href = '',
		small = false
	} = props;

	return (
		<div className="thumbnail">
			<Link href={href} as={as}>
				<a>
					<img src={image} alt={caption} className="thumbnail__image" />
					<div className="thumbnail__caption">{caption}</div>
				</a>
			</Link>
			<style jsx>{`
				.thumbnail {
					width: ${small ? '100px' : 'auto'};
				}

				.thumbnail__image {
					width: 100%;
				}

				.thumbnail__caption {
					text-align: center;
					padding: 10px;
				}
			`}</style>
		</div>
	);
};

export default Thumbnail;
