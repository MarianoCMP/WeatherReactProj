import React from "react";
import "./Home.css"

function Home() {

    return (

        <div className="background" >
            <main>
        <div className="homepage">
            
            <h1>
                WEATHER APP
            </h1>
            <h2>++Christmas Themed++</h2>
            

            </div>  
            <div >
                    <p style={{ color: 'red'}}>
                    *Disclaimer*
                        Due to free API usage searches are limited. P.S. Thank You UK for the API availability
                    </p>

                    <h2 style={{color: 'white'}}>
                        Background image will change if the inserted location's temperature is greater than 17°c or 60°F 
                    </h2>
                    
                    <h3 style={{color: 'greenyellow'}}> 
                        Click the link above called "Weather App" and test its power
                    </h3>
                </div>
            </main>
        </div>
    );
    
}

export default Home;


