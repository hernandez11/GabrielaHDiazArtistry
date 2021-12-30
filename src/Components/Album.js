import React from 'react';
import '../Styling/Album.css';
import Assets from './Data.js';
import styled from 'styled-components'

function Album() {
const Line = styled.hr`
    background-color: black;
    border: none;
    width: 20%;
    height: 2px;
    margin-right: 15px
`;


    return (
        <>
        <ul>
            {Assets.map(album => {
            return (
                <div className='album' key={album.id}>
                    <div className='album__start__wrapper'>
                        <div className='secondaryImage__wrapper'>
                            <img className='secondaryImage' src={album.subImage00} alt='' />
                            <img className='secondaryImage' src={album.subImage01} alt='' />
                        </div>
                        <div className='text__container'>
                            <p className='textLine01'>{album.textLine1}</p>
                            <p className='textLine02'>{album.textLine2}</p>
                            <p className='textLine03'>{album.textLine3}</p>
                            <span className='flex'><Line /><p className='textLine04'>{album.textLine4}</p></span>
                        </div>
                    </div>
                    <div className='album__end__wrapper'>
                        <img className='primaryImage' src={album.primaryImage} alt='' />
                    </div>

                </div>
            )
            })}
        </ul>
        </>
    )
}

export default Album
