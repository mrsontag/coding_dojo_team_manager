import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import {Link, useNavigate } from '@reach/router';

const GameStatus = props => {
    const [ players, setPlayers ] = useState([]);
    const Navigate = useNavigate();
    const [ game, setGame ] = useState(1);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/players/")
        .then(res => setPlayers(res.data))
        .catch(err => console.log(err));

    }, [])

    const changeStatus = (player, status) => {

    }

    return(
        <div>
            <h1>This functionality is not complete.</h1>
            <button name="Game1" onClick={() => setGame(1)}>Game 1</button>
            <button name="Game2" onClick={() => setGame(2)}>Game 2</button>
            <button name="Game3" onClick={() => setGame(3)}>Game 3</button>
            <table className="table table-striped ">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length > 0 && players.map((player, index) => {
                        return(
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>
                                    <button name="edit" id="edit" onClick={() => Navigate("/edit/" + player._id)}>Edit Player</button>
                                    
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GameStatus;