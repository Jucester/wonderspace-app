import React, { useEffect, useState } from 'react';
import './Planet.css';


class Planet extends React.Component {

        constructor() {
            super();
            this.state = { 
                show : false,
                clicked: false };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            console.log('Clicked!');
            if (this.state.show) {
                this.setState({ 
                    show: false,
                    clicked: false
                })
            } else {
                this.setState({ 
                    show: true,
                    clicked: true
                })
            }
           
        } 

    
        render() {
            const { planet } = this.props;
            const activeClassName = this.state.clicked ? "image-planet active" : "image-planet";

           
        
            return (

                <div className="planet">
                    <div className={activeClassName} onClick={this.handleClick}>
                        <img src={`./Planets/${planet.name}.png`} alt={planet.name} />
                    </div>
                    <Modal show={this.state.show} planet= {planet.name} />
                
                </div>
            )
        }

        /*

          <Box show={this.state.show} /> 
        {  this.state.show ? <Box planet={planet.name} />  : null  }

         */
}

async function fetchData(planet) {
    const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`);
    const data = await res.json();
    return data
}

function Modal ({ show, planet }) {


    const [ planetInfo, getPlanetInfo ] = useState({});

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const fetchData = async (planet) => {
        const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`);
        const data = await res.json();
        console.log(data[0])
        getPlanetInfo(data);
    };

    useEffect( () => {
        fetchData();
    }, []);


  

    return (
        <div className={showHideClassName}>
         
                    <div className="info-planet">
                        <div className="tabs-planet">
                            <button className="tabs"> Description </button>
                            <button className="tabs"> Specifications </button>
                            <button className="tabs"> Mars in culture </button>
                        </div>
    
                        <div className="texts-planet">
                            <h3> { planet }, <span> Planet </span> </h3>
                            <p> 
                                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
    
                                The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar. Mars is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan.
    
                            </p>
                        </div>
                    </div>
              
            </div>
        )
    
}



export default Planet;