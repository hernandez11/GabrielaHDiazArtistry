import React from 'react';
import '../Styling/LatestWork.css';
import Album from '../Components/Album.js';

function LatestWork() {
    return (
        <div className='latestWork'>
            {/* 4 iterations of the Album component */}
            <Album />
        </div>
    )
}

export default LatestWork
