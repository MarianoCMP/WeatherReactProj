import React from "react";

import {
   Outlet, Link
  } from "react-router-dom";



function Weather() {

     return (
         <div>

             <h1>Welcome to the Weather App!</h1>

             <nav>
         <ul>
         <li>
             <Link to="WeatherApp">Weather App</Link>
                     </li>
                     
                     <li>
             <Link to="Home">Home</Link>
         </li>
         </ul>
             </nav>
             
<Outlet/>
         
         </div>
      );
  
  
}

export default Weather;