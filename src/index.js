import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter,
  Routes,
  Route
} from 'react-router-dom';
//import Home from './components/Home';

import Weather from './components/Weather';
import Home from './components/Home'



ReactDOM.render(
  <HashRouter>
    <Routes>


      <Route path = "" element = {<Weather/>} >
        
        < Route path="WeatherApp" element={<App />} />
        
        <Route path = "Home" element={<Home/> } />

        {/* <Route path = "Home" element= {<Home/>} /> */}

        {/* < Route path="WeatherApp" element={<Weather />} /> */}

      
    
        </Route>
        </Routes>
  </HashRouter>,
  document.getElementById('root')
);
