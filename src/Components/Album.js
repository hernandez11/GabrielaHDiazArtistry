import React from 'react';
import '../StylingAlbum.css';
import Assets from './Data.js';

function Album() {
    return (
        <div className='album'>
            {Object.keys(Assets).map(index => (
                <Selector
                    onClick={event => handleSetClicked(event)}
                    data-asset={index}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Album
