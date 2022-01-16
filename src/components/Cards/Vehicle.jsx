import React from 'react'

function Vehicle(props) {
    const { response: { name, description, vehicle_class } } = props
    return (
        <div className="card bg-cyan-50">
            <div className="title">
                <h6 className='text-xs font-light'>{vehicle_class}</h6>
                <h3 className='text-xl'>{name}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Vehicle
