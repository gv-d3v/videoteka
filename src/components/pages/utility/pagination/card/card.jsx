import React from 'react';

const Card = ({ data, button }) => {
    return (
        <div className='col'>
            <div className='card shadow-sm'>
                {data}
                {button}
            </div>
        </div>
    );
};

export default Card;
