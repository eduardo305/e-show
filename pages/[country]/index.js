import axios from 'axios';

const Home = (props) => {
  const renderShows = () => {
    return props.shows.map(show => {
      return <li key={show.show.id}>{show.show.name}</li>
    })
  }

  return (
    <div>
      This is our Home in a dynamic routing
      <ul>{ renderShows() }</ul>
    </div>
  )
}

Home.getInitialProps = async (context) => {
  const country = context.query.country || 'us';
  const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);

  return {
    shows: response.data
  }
}

export default Home;