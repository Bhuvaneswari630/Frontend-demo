import { useNavigate } from "react-router-dom";
function UpdateButton({id}) {
    // console.log(id);
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/person/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    console.log('Updated successfully');
                    navigate('/', { replace: true })
                } else {
                    console.log('Error updating a person');
                }
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <button onClick={handleDelete} >
            Delete
        </button>
    )
}

export default UpdateButton