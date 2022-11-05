import axios from 'axios';
import { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/feather/search'
import { WeatherViewer } from './Components/WeatherViewer'

function App() {

  // states
  const [citySearch, setCitySearch] = useState('');
  const [cityData, setCityData] = useState(null);

  // city search form
  const fetchCity = (e) => {
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PXCNle55fEpP4okWACU1Ii8LtyNqDinu&q=${citySearch}`)
      .then((res) => {
        setCityData(res.data[0]);
        setCitySearch('');
      })
  }

  return (

    <div className="wrapper">
      <h1 className="headline">City Weather Info Card</h1>
      <form className='form-group custom-form' autoComplete='off'
        onSubmit={fetchCity}>
        
        <div className='search-box'>
          <input className='form-control' required placeholder='Enter the name of a city'
            value={citySearch} onChange={(e) => setCitySearch(e.target.value)} />
          <button className="btn btn-primary" type="button"
            onClick={citySearch}
          >Show weather info</button>
        </div>
      </form>
      {cityData &&
        <div style={{ padding: 10 + 'px', width: 100 + '%' }}><WeatherViewer cityData={cityData} />
        </div>}

    </div>

  );
}

export default App;
