import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Projects from './components/Projects';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
        
        < Route path="" element={<App />} >

        <Route path = "Home" element= {<Home/>} />

        < Route path="Projects" element={<Projects />} >

         < Route path="VideoGame" element={<VideoGame/>} />
        < Route path = "SoloVideoGame" element={<SoloVideoGame/>}/>
        <Route path = "MobileApp" element = {< MobileApp/>} />
        
        </Route> 

        < Route path="ContactMe" element={<ContactMe />} />

        < Route path = "AboutMe" element = {<AboutMe/>} />
    
        </Route>
        </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
