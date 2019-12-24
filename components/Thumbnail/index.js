import ThumbnailStyles from './styles';

const Thumbnail = props => {
	const {
		image = 'https://via.placeholder.com/210x295?text=?',
		caption
	} = props;

	return (
		<div className="thumbnail">
			<img src={image} alt={caption} className="thumbnail__image" />
			<div className="thumbnail__caption">{caption}</div>
			<style jsx>{ThumbnailStyles}</style>
		</div>
	);
};

export default Thumbnail;
