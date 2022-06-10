import React from 'react';
import  './style/App.css'

const handleFormSubmit = (event) => {
    event.preventDefault()

    const form = document.querySelector('.contact-form');
    const data = new FormData(form)
    const formJSON = Object.fromEntries(data.entries());

    const result = document.querySelector('.result p')
    result.innerText = JSON.stringify(formJSON, null, 2);
    form.reset()

}


const Contact = () => {
    return (
        <div className='contactPage'>
            <form className='contact-form'>
                <div className="formContent">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name='surname'/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'/>
                    <label htmlFor="phone">Phone number</label>
                    <input type="number" name='phone'/>
                    <button type="submit" onClick={handleFormSubmit}>Submit</button>
                </div>
                <div className="result">
                    <h4>Content</h4>
                    <p></p>
                </div>
            </form>
        </div>
    );
};

export default Contact;