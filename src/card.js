import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-header text-muted'>
            {props.header}
        </div>
        <div className='card-body'>
            {props.children}
        </div>
    </div>
  )
}

export default Card;
