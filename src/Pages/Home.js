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
                {/* <img className='main__img' src='./Assets/home__hero.png' alt='' /> */}
                <span className='icons__container'>
                    <a href='instagram.com'><img className='icon' src='./Assets/instagram__icon.png' alt='' /></a>
                    <a href='facebook.com'><img className='icon' src='./Assets/facebook__icon.png' alt='' /></a>
                    <a href=''><img className='icon' src='./Assets/email__icon.png' alt='' /></a>
                </span>
            </div>
        </div>
    )
}

export default Home
