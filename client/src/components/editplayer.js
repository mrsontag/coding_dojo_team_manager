import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useNavigate } from '@reach/router';

const EditPlayer = props => {
    const [ name, setName ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ buttontext, setButtonText] = useState("Add");
    const Navigate = useNavigate();
    const [ btndisabled, setBtnDisabled ] = useState("disabled");

    const updateName = (newname) => {
        setName(newname);
        if(newname.length > 1){ 
            setBtnDisabled(""); 
        } else {
            setBtnDisabled("disabled");
        } 
    }
    
    useEffect(() => {
        if(typeof(props.id) !== "undefined") {

            Axios.get("http://localhost:8000/api/players/"+ props.id)
            .then(res => {
                updateName(res.data.name);
                setPosition(res.data.preferred_position);
                setButtonText("Update");
            })
            .catch(err => console.log(err));
        }
    }, [])

    const validateErrors = result => {
        if(typeof(result.error) === "undefined") {
            Navigate('/');
            return;
        }
        alert("Something went wrong - please review and resolve the following errors: \r\n" + Object.keys(result.error.errors).map((key) => {
            return( "Field: " + key + "   -   " + result.error.errors[key].message);
        }));
    }
    
    const SubmitForm = (e) => {
        e.preventDefault();
        if(btndisabled === "disabled") { return; }
        if(typeof(props.id) !== "undefined") {
            Axios.put("http://localhost:8000/api/players/update/" + props.id, { $set: {
                name: name,
                preferred_position: position,
            } })
            .then(res => validateErrors(res.data))
            .catch(err => console.log(err));
        } else {
            Axios.post("http://localhost:8000/api/players/new", {
                name: name,
                preferred_position: position,
            })
            .then(res => validateErrors(res.data))
            .catch(err => console.log(err));    
        }

        
    }


    return(
        <form onSubmit={ SubmitForm } >
            <label className="d-block" htmlFor="name">Player Name:</label>
            <input className="d-block mb-4" type="text" name="name" id="name" value={name} onChange={(e) => updateName(e.target.value) }/>
            <label className="d-block" htmlFor="position">Preferred Position:</label>
            <input className="d-block mb-4" type="text" name="position" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
            <button type="submit" className={"btn btn-primary rightside " + btndisabled}>{buttontext}</button>
        </form>
    )
}

export default EditPlayer;