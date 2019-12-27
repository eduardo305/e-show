import Error from 'next/error';

const CustomError = ({ statusCode }) => {
	if (statusCode === 404) {
		return (
			<Error
				statusCode={statusCode}
				title="The resource you are looking for was not found..."
			/>
		);
	}

	return (
		<Error
			statusCode={statusCode}
			title="Something went wrong. Please refresh the page..."
		></Error>
	);
};

CustomError.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

	return { statusCode };
};

export default CustomError;
