import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/person/all`
            const response = await fetch(url)
            const data = await response.json()
            if (data.length) {
                setData(data)
            }
        }
        fetchData()
    }, [])
   
    const displayPeople = data.map(person => {
        return (
            <li key={person._id}>
                <Link to='/person'
                    state= {{
                        data: person
                    }}
                >{person.name}</Link>
            </li >
        )
})
return (
    <div>
        <h2>List of People</h2>
        <ul>
            {displayPeople}
        </ul>
    </div>
)
}

export default Home