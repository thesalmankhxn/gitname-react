import React, { Component } from 'react';
import './Search.scss';
import propTypes from 'prop-types';

class Search extends Component {
    state = {
        text: '',
    };

    static propTypes = {
        searchUsers: propTypes.func.isRequired,
        clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired,
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div className='form-container text-center'>
                <form onSubmit={this.onSubmit} className='form'>
                    <input 
                        type="text" 
                        name='text' 
                        placeholder='Search Users...' 
                        className='text-input'
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        className='btn-submit' 
                    />
                </form>
                {showClear && (
                    <button 
                    className='btn-clear' 
                    onClick={clearUsers}
                    >
                    <i className="fas fa-trash"></i>
                    </button>
                )}
            </div>
        )
    }
}

export default Search;