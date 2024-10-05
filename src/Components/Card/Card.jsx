import React from 'react'

const Card = ({title, text}) => {
    return (
        <div className='card'>
            <h1 className="card_title">
                {title}
            </h1>
            <p className="card_text">
                {text}
            </p>
        </div>
    )
}

export default Card