import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useNavigate } from '@reach/router';
import DeleteButton from "./delete_button";

const Players = props => {
    const [ players, setPlayers ] = useState([]);
    const [ counter, setCounter ] = useState(1);
    const Navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:8000/api/players/")
        .then(res => setPlayers(res.data))
        .catch(err => console.log(err));

    }, [counter])

    return(
        <div>
            <Link to="/new/">Add New Player</Link>
            <table className="table table-striped ">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length > 0 && players.map((player, index) => {
                        return(
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.preferred_position}</td>
                                <td>
                                    <button name="edit" id="edit" onClick={() => Navigate("/edit/" + player._id)}>Edit Player</button>
                                    <DeleteButton id={player._id} triggerUpdate={setCounter}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Players;