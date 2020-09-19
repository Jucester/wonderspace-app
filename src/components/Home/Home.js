import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';



class Home extends React.Component {


  render() {
    return (
      <div className="App">
          
        <Navbar />
          
        <div className="hero">

            <h1 className="title"> Start learning wonderful things about the space </h1>
            <SearchBar />
            
        </div>
        
      </div>

    )
  }
}

export default Home;