import React from 'react';

const Modal = props => (
    <div className="modal">
        <header><h1>{props.title}</h1></header>
        <section className="modal_content">{props.children}</section>
        <section className="modal_actions">
            {props.canCancel && (<button className="btn" onClick={props.onCancel}>Cancel</button>)}
            {props.canConfirm && (<button className="btn" onClick={props.onConfirm}>Confirm</button>)}
        </section>
    </div>
);

export default Modal;