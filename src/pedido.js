import React from 'react';
import ReactDOM from 'react-dom';

const Pedido = (props) => {
    return (
        <div className='card'>
            <div className='card-body d-flex'>
                <div className='d-flex align-items-center'>
                    <i class={props.icon}></i>
                </div>
                <div className='flex-grow-1 border ms-2 rounded'>
                    <h4 className='text-center'>{props.title}</h4>
                    <p className='text-center'>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Pedido;