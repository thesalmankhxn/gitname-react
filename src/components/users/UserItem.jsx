import React from 'react';
import './UserItem.scss';

const UserItem = ({user : { login, avatar_url, html_url }}) => {

    // const { login, avatar_url, html_url } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn">
                    +
                    </a>
            </div>
        </div>
    );
}

export default UserItem;