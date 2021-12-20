import React from 'react';
import { useState } from 'react';





  const api = {
    key: "5816b06f09fef7a89c2fb77399b2e021",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  function App() {
      const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
      const dateBuilder = (d) => {
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
          let day = days[d.getDay()];
          let date = d.getDate();
          let month = months[d.getMonth()];
          let year = d.getFullYear();
  
          return `${day} ${date} ${month} ${year}`
      }
      return (
          <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <main>
              <div className="search-box">
                <input 
                  type="text"
                  className="search-bar"
                  placeholder="Limited search due to free API..."
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
              </div>
              {(typeof weather.main != "undefined") ? (
              <div>
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°c
                  </div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              </div>
              ) : ('')}
            </main>
          </div>
        );
    
    
  }

 


export default App;

// return (

//   <div>
//       <nav>
//         <ul>
//           {/* <li>
//             <Link to="Home">Home</Link>
//         </li> */}
//         <li>
//             <Link to="Weather">Weather App</Link>
//         </li>
//         </ul>
//     </nav>
    
//     </div>
// );