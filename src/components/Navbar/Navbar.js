import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends React.Component {

    render() {
        return (
           
                <div className = "navbar">
                 

                    <ul>                    
        
                        <li><Link to="/nasaphoto"> Image of the Day </Link></li>
                        <li><Link to="/solarsystem"> Solar System </Link></li>

                      

                    </ul>

                </div> 
   
        )
    }
}


export default Navbar;