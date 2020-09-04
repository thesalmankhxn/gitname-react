import React from 'react';
import './UserItem.scss';
import propTypes from 'prop-types';
import Links, { Link } from 'react-router-dom';

const UserItem = ({ user : { login, avatar_url, html_url }}) => {

    // const { login, avatar_url, html_url } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn">
                    +
                    </Link>
            </div>
        </div>
    );
};

UserItem.protoTypes = {
    user: propTypes.object.isRequired,
}

export default UserItem;