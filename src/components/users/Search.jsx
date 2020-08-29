import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
    render() {
        return (
            <div className='form-container text-center'>
                <form className='form'>
                    <input 
                        type="text" 
                        name='text' 
                        placeholder='Search Users...' 
                        className='text-input'
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        className='btn-submit' 
                    />
                </form>
            </div>
        )
    }
}

export default Search
