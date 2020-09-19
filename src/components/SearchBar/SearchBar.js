import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {

    

    render() {
        return (
            <div className="form">
             
                <form> 
                    <input type="text" name="search" id="search" className="search" placeholder="What do you want to search?" />
                    <button>   <FontAwesomeIcon icon={faSearch} /> </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;