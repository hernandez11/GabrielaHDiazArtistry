import React, { useState } from 'react';
import '../Styling/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    function HandleSubmit(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_btpqiei', 'template_85l6ymh', e.target, 'user_VqB97g7ee60J4wAdbqLjK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

        setSuccess(!success)
    }

    const [ success, setSuccess ] = useState(false);

    const submit = success => {
        setSuccess(!success);
    };

    return (
        <div className='contact'>
            <img className='contact__img' src='./Assets/contact__img.jpg' alt='' />
            <div className='form__container'>
                {success == false && (
                <form className='contact__form' onSubmit={HandleSubmit}>
                <h1 className='form__title'>Get In Touch</h1>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*FIRST NAME.</label>
                            <input type='text' required name='fName' />
                        </span>
                        <span className='row__item'>
                            <label>*LAST NAME.</label>
                            <input type='text' required name='lName' />
                        </span>
                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*EMAIL.</label>
                            <input type='text' required name='email' />
                        </span>
                        <span className='row__item'>
                            <label>*PHONE.</label>
                            <input type='text'required name='phone'/>
                        </span>
                    </span>
                    <span className='row__item'>
                        <label>LEAVE A MESSAGE</label>
                        <textarea name='moreInfo' />
                    </span> 
                    <span className='submit'>
                        <button onClick={submit}>Submit</button>
                        <img src='./Assets/straight__arrow__icon.png' alt='' />
                    </span>
                    <p className='email__link'>EMAIL ME</p>
                    <a href='mailto:ahernandez11diaz@gmail.com' className='email__link'>Gabby.hdz2016@gmail.com</a> 
                </form>
                )}
                {success == true && (
                    <span className='submitSuccess__wrapper'>
                    <h1 className='submitSuccess_title'>Get In Touch</h1>
                    <p className='submitted'>Thanks for reaching out! I'm thrilled to hear from you.</p>
                    <p className='email__link'>EMAIL ME</p>
                    <a href='mailto:ahernandez11diaz@gmail.com' className='email__link'>Gabby.hdz2016@gmail.com</a> 
                    </span>
                )}
            </div>
        </div>
    )
}

export default Contact
