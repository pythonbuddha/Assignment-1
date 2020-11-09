import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.userName} </p>
            <p>I hope I will be overwritten!</p>
        </div>
    );
};

export default UserOutput;