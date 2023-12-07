import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function UpdatePersonForm() {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state
    // console.log('inside update form', data._id);
    const [person, setPerson] = useState( data )
    const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        person.age = Number(person.age)
        const url = `${process.env.REACT_APP_BACKEND_URL}/person/${data._id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
        if (response.ok) {
            console.log('Updated successfully');
            navigate('/', { replace: true })
        } else {
            console.log('Error updating a person');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                name='name'
                placeholder='name'
                value={person.name}
                onChange={handleChange}
            />
            <input
                type="text"
                required
                name='age'
                placeholder='age'
                value={person.age}
                onChange={handleChange}
            />
            <input
                type="text"
                required
                name='location'
                placeholder='location'
                value={person.location}
                onChange={handleChange}
            />
            <input
                type="text"
                name='favoriteColor'
                placeholder='favoriteColor'
                value={person.favoriteColor}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}

export default UpdatePersonForm