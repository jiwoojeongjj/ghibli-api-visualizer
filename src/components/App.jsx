import React, { useState, useEffect } from 'react';

// Importing the components
import Character from './Cards/Character';
import Film from './Cards/Film';
import Location from './Cards/Location';
import Species from './Cards/Species';
import Vehicle from './Cards/Vehicle';

function App() {
    // Base URL of the API
    const BASE_URL = "https://ghibliapi.herokuapp.com"
    // Endpoints of the API
    const selections = ["Films", "People", "Locations", "Species", "Vehicles"]

    // Keeping track of the endpoint selected by the user
    const [endpoint, setEndpoint] = useState("Films")
    // Keeping track of the text input
    const [text, setText] = useState("")
    // Keeping track of the data to display to the user
    const [responses, setResponses] = useState([])

    // Fetching new data to display when the user changes the endpoint
    useEffect(() => {
        async function getData() {
            const URL = `${BASE_URL}/${endpoint}`
            console.log(URL)
            await fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setResponses(data)
                })
        }
        getData();
    }, [endpoint])

    // Filtering the data to only show responses that include the text input in their title
    const filteredResults = responses.filter(response => {
        if (text === "") {return response}
        if (endpoint === "Films") {
            if (response.title.toLowerCase().includes(text.toLowerCase())) {
                return response
            }
        } else {
            if (response.name.toLowerCase().includes(text.toLowerCase())) {
                return response
            }
        }
        return false;
    })

    // Changing the state of the endpoint depending on the user's selection
    function handlingSelect(event) {
        setEndpoint(event.target.value)
    }

    // Changing the state of the text input as the user types
    function handlingChange(event) {
        setText(event.target.value)
    }

    // Serving the appropriate component depending on the current endpoint
    function showFiltered(response) {
        if (endpoint === "Films") {
            return <Film response={response}></Film>
        } else if (endpoint === "People") {
            return <Character response={response}></Character>
        } else if (endpoint === "Locations") {
            return <Location response={response}></Location>
        } else if (endpoint === "Species") {
            return <Species response={response}></Species>
        } else if (endpoint === "Vehicles") {
            return <Vehicle response={response}></Vehicle>
        }
    }

    return (
        <div className="app p-12">
            <div className="app__main-heading flex justify-center mb-10">
                <h1 className='text-8xl'>Discover your&nbsp;</h1>
                <h1 className='text-8xl ghibli-animation'>Ghibli.</h1>
            </div>
            <div className="app__search-select p-6 flex justify-center gap-x-8">
                <input 
                    className="search-select" 
                    type="text" 
                    value={text} 
                    onChange={handlingChange}
                />
                <select className="search-select" value={endpoint} onChange={handlingSelect}>
                    {selections.map((selection) => {
                        return <option className="search-select" value={selection}>{selection}</option>
                    })}
                </select>
            </div>
            <div className="app__output p-6 grid md:grid-cols-4 gap-10">
                {filteredResults.map(response => showFiltered(response))}
            </div> 
        </div>
    )
}    

export default App
