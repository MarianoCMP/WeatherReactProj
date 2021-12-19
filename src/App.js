import React from 'react';



import {
  Link
} from "react-router-dom";

function App() {
  return (

    <div>
        <nav>
          <ul>
            <li>
              <Link to="Home">Home</Link>
          </li>
          <li>
              <Link to="Weather">Weather App</Link>
          </li>
          </ul>
      </nav>
      
      </div>
  );
}

export default App;