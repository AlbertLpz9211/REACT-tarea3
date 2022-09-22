import React from 'react';

const LocationItem = ({endpoint, key}) => {
    return (
        <div>
            <li key={key}>{endpoint}</li>
        </div>
    );
};

export default LocationItem;