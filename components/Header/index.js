import { useState } from 'react';
import { useRouter } from 'next/router';

const countries = [
	{
		value: 'us',
		label: 'United States'
	},
	{
		value: 'br',
		label: 'Brazil'
	}
];

const Header = () => {
	const router = useRouter();
	const [selectedCountry, setSelectedCountry] = useState(router.query.country);
	// Create a state with initial value coming from router
	// Set a new state whenever the select option changes

	const renderCountryOptions = () => {
		return countries.map(country => (
			<option key={country.value} value={country.value}>
				{country.label}
			</option>
		));
	};

	const handleChange = e => {
		setSelectedCountry(e.target.value);
		// Route user to the new country
		// /br
		// /us
		router.push('/[country]', `/${e.target.value}`);
	};

	return (
		<div className="header">
			<select value={selectedCountry} onChange={handleChange}>
				{renderCountryOptions()}
			</select>

			<style jsx>{`
				.header {
					padding: 20px;
					text-align: center;
					background-color: black;
					color: white;
					margin-bottom: 20px;
				}
			`}</style>
		</div>
	);
};

export default Header;
