import React from 'react';
import './Users.scss';

import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import propTypes from 'prop-types'


const Users = ({ users, loading }) => {
        if(loading) {
            return <Spinner />;
        } else {
            return (
                <div className='flex-wrap'>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            );
        } 
}

Users.propTypes = {
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}

export default Users;
