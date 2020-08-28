import React, { Component } from 'react';
import './Users.scss';

import UserItem from './UserItem';

class Users extends Component {

    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: '2',
                login: 'iamSK77',
                avatar_url: 'https://avatars3.githubusercontent.com/u/65806887?v=4',
                html_url: 'https://github.com/iamsk77'
            },
            {
                id: '3',
                login: 'iamSK77',
                avatar_url: 'https://avatars3.githubusercontent.com/u/65806887?v=4',
                html_url: 'https://github.com/iamsk77'
            },
            {
                id: '4',
                login: 'iamSK77',
                avatar_url: 'https://avatars3.githubusercontent.com/u/65806887?v=4',
                html_url: 'https://github.com/iamsk77'
            },
            {
                id: '5',
                login: 'iamSK77',
                avatar_url: 'https://avatars3.githubusercontent.com/u/65806887?v=4',
                html_url: 'https://github.com/iamsk77'
            }
        ]
    };
    render() {
        return (
            <div className='flex-wrap'>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

export default Users
