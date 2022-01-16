import React from 'react'

function Location(props) {
    const { response: { name, climate, terrain } } = props
    return (
        <div className="card bg-lime-50">
            <div className="name">
                <h3 className='text-xl'>{name}</h3>
            </div>
            <div className="description">
                <ul className='description-ul'>
                    <li>{climate}</li>
                    <li>{terrain}</li>
                </ul>
            </div>
        </div>
    )
}

export default Location
