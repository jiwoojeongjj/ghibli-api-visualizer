import React from 'react'

function Film(props) {
    const { response: { title, original_title, description, release_date } } = props
    return (
        <div className="card bg-amber-50">
            <div className="title">
                <h6 className='text-xs font-light'>{original_title}</h6>
                <h3 className='text-xl'>{title}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Film
