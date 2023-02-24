import React from 'react'

function Feedback(props) {

    return (
        <div className='d-flex justify-content-evenly m-2'>
            <button type='button'
                className='btn btn-primary'
                onClick={props.functionOk}>
                {props.textOk}
            </button>
            <button type='button'
                className='btn btn-danger'
                onClick={props.functionNot}>
                {props.textNot}
            </button>
        </div>
    );
}

export default Feedback;