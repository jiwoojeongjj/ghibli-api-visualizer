import React from 'react'

function Character(props) {
    const { response: { name, gender, age, eye_color, hair_color } } = props
    return (
        <div className="card bg-red-50">
            <div className="name">
                <h3 className='text-xl'>{name}</h3>
            </div>
            <div className="description">
                <ul className='description-ul'>
                    <li>{gender}</li>
                    <li>{age}</li>
                    <li>{eye_color}</li>
                    <li>{hair_color}</li>
                </ul>
            </div>
        </div>
    )
}

export default Character
