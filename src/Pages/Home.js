import React from 'react';
import '../Styling/Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <h1>Gabriela Diaz</h1>
                <span className='subHeader__wrapper'>
                    <hr className='line'/>
                    <p>MUA</p>
                    <hr className='line'/>
                </span>
            </div>
            <div className='home__body'>
                <span className='icons__container'>
                    <a href='https://www.instagram.com/gabby.glam/' target="_blank" rel="noopener noreferrer"><img className='icon' src='./Assets/instagram__icon.png' alt='' /></a>
                    <a href='https://www.facebook.com/gabby.hernandez.5686' target="_blank" rel="noopener noreferrer"><img className='icon' src='./Assets/facebook__icon.png' alt='' /></a>
                    <a href='mailto:ahernandez11diaz@gmail.com'><img className='icon' src='./Assets/email__icon.png' alt='' /></a>
                </span>
            </div>
        </div>
    )
}

export default Home
