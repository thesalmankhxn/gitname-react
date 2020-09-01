import React from 'react';
import './Alert.scss';

const Alert = ({ alert }) => {
    return (
       alert !== null && (
           <div className={`alert`}>
            <i className="fas fa-info-circle"> {alert.msg}</i>
           </div>
       )
    );
};

export default Alert;

