import React from 'react';
import { useNavigate} from '@reach/router';
import Axios from 'axios';

const DeleteButton = props => {
    const Navigate = useNavigate();

    const deleteItem = () => {
        if(window.confirm("Are you sure you want to delete the player?")) {
            alert("Deleting!")
            Axios.delete("http://localhost:8000/api/players/delete/" + props.id)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            if(typeof(props.triggerUpdate) !=="undefined") {
                props.triggerUpdate(Math.random());
            }
        }

    }

    return(
        <button type="button" name="delete" onClick={ deleteItem }>Delete item.</button>
    )
}

export default DeleteButton;