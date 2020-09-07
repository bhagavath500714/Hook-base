import React, {useState}from 'react'
import { useDispatch } from 'react-redux'

const AddActivity = () => {
    // const [data, setData] = useState({})

    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: ""
    })


    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    // console.log(data);

    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }

    return (
        <div>
            <p>Activity</p>
            <input name={"name"} onChange={(e) => handleChange(e)} placeholder={"Activity Name..."} />

            <p>Duration</p>
            <input name={"duration"} onChange={(e) => handleChange(e)} placeholder={"Activity Name..."} />
            <button onClick={addActivity}>Add Activity</button>
        </div>
    )
};

export default AddActivity;