import React from 'react';
import './style/modal.css'

const Modal = ({addCard, setActive, ...props}) => {
    return (
        <div className={props.active ? 'modal active' : 'modal'}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <input type="text" placeholder='Drink Name'/>
                <input type="text" placeholder='Category'/>
                <input type="text" placeholder='Tags'/>
                <input type="text" placeholder='Instructions'/>
                <div className="buttons">
                    <button onClick={() => addCard(props.post)}>Edit</button>
                    <button onClick={() => setActive(false)}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;