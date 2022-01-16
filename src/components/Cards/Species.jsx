import React from 'react'

function Species(props) {
    const { response: { name, eye_colors, hair_colors } } = props
    return (
        <div className="card bg-indigo-50">
            <div className="name">
                <h3 className='text-xl'>{name}</h3>
            </div>
            <div className="description">
                <ul className='description-ul'>
                    <li>{eye_colors}</li>
                    <li>{hair_colors}</li>
                </ul>
            </div>
        </div>
    )
}

export default Species
