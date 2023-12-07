import { useNavigate } from "react-router-dom";
function DeleteButton({id}) {
    // console.log(id);
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/person/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    console.log('Deleted successfully');
                    navigate('/', { replace: true })
                } else {
                    console.log('Error deleting a person');
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

export default DeleteButton