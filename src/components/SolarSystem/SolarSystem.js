import React from 'react';
import './SolarSystem.css';
import Planet from '../Planet/Planet';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 550, itemsToShow : 1},
    { width: 768, itemsToShow : 2},
    { width: 1200, itemsToShow : 3},
]



class SolarSystem extends React.Component {
    
    state = {
        planets: [
            {id: 1, name: 'sun'},
            {id: 2, name: 'mercury'},
            {id: 3, name: 'mars'},
            {id: 4, name: 'earth'},
        ]
    }
  
    render() {
        return (
            <div className="solar"> 
                <Carousel breakPoints={breakPoints} className="items">

                    {this.state.planets.map( planet => 
                                                <Planet planet={planet} key={planet.id} />
                                            )
                    }

                </Carousel>
                    

    
             

            </div>

        ) 
    }
}

export default SolarSystem;