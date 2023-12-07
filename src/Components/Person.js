import { Link, useLocation } from "react-router-dom"
import DeleteButton from './DeleteButton'

function Person() {
    const location = useLocation()
    const { data } = location.state
    // console.log(data._id);
    const displayColor = data.favoriteColor ? `likes ${data.favoriteColor} color and` : ''
    return (
        <div>
            <p>
                {data.name} is {data.age} years old who {displayColor} lives in {data.location}
            </p>
            <Link to='/update'
                state={{
                    data: data
                }}
            ><button>Update</button></Link>
            <DeleteButton id={data._id} />
            <Link to='/'><button>Back to Home</button></Link>
        </div>
    )
}

export default Person