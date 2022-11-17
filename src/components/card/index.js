import React from 'react';
import './card.css';


const Card = () => (
    <div className="card">
        <div className="card-header">
            <div className="checkbox-user"><input type="checkbox" id="checked-user" name="checked" value="user" /></div>
            <div className="card-image"><img src="https://avatars.githubusercontent.com/u/79349007?v=4" alt="Orange" /></div>
        </div>
        <div className="card-id">
            <h5>ID</h5>
        </div>
        <div className="card-login">
            <h5>Login</h5>
        </div>
        <div className="card-view-profile">
            <button className="view-profile">View profile</button>
        </div>
    </div>
);

export default Card;
