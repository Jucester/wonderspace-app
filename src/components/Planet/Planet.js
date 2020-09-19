import React from 'react';
import './Planet.css';


async function fetchData(id) {
    const res = await fetch(
        `https://api.le-systeme-solaire.net/rest/bodies/${id}`
    );
    const data = await res.json();
    console.log("data:", data);
    return data;
 
}

class Planet extends React.Component {

        constructor() {
            super();
            this.state = { show : false };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            console.log('Clicked!');
            if (this.state.show) {
                this.setState({ 
                    show: false
                })
            } else {
                this.setState({ 
                    show: true
                })
            }
           
        }

        render() {
            const { planet } = this.props;
          
            return (

                <div className="planet">
                    <div className="image-planet" onClick={this.handleClick}>
                        <img src={`./Planets/${planet.name}.png`} alt={planet.name} />
                    </div>
                    <Box show={this.state.show} />
                    { /* this.state.show ? <Box planet={planet.name} />  : null  */}
                </div>
            )
        }
}

class Box extends React.Component {


    render() {

        const info = fetchData(this.props.planet);
        console.log("info:" , info)

        return ( 
            <div className="info-planet">

                <div className="tabs-planet">
                    <button className="tabs"> Description </button>
                    <button className="tabs"> Specifications </button>
                    <button className="tabs"> Mars in culture </button>
                </div>
                
                <div className="texts-planet">
                    <h3> Planet, <span> Planet </span> </h3>
                    <p> 
                        Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.

                        The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar. Mars is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan.

                    </p>
                </div>
            </div>
        )
    }
}

export default Planet;