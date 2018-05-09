import React from 'react';

const Location = (props) => {
         return (
            <div className='location__container'>
              <div className='location__city'>{props.city}</div>
              <div className='location__country'>{props.city}</div>
              <div className='location__lnglat'>LAT: {props.lat}/ LNG: {props.lng}</div>
            </div>
        );
    };

export default Location;

