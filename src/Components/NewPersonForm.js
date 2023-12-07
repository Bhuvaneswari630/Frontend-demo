import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewPersonForm() {
    const INIT_STATE = {
        name: '',
        age: '',
        location: '',
        favoriteColor: ''
    }
    const [data, setData] = useState(INIT_STATE)
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.age = Number(data.age)
        const url = `${process.env.REACT_APP_BACKEND_URL}/person`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (response.status !== 201) {
            console.log('erro')
        } else {
            navigate('/', { replace: true })
        }

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                name='name'
                placeholder='name'
                value={data.name}
                onChange={handleChange}
            />
            <input
                type="text"
                required
                name='age'
                placeholder='age'
                value={data.age}
                onChange={handleChange}
            />
            <input
                type="text"
                required
                name='location'
                placeholder='location'
                value={data.location}
                onChange={handleChange}
            />
            <input
                type="text"
                name='favoriteColor'
                placeholder='favoriteColor'
                value={data.favoriteColor}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}

export default NewPersonForm