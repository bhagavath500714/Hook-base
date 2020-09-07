import React, {useState} from 'react'
import Activity from './Activity'
import {useSelector} from 'react-redux'
import AddActivity from './AddActivity'
import Hooks from './Hooks'
import UseStatePage from './UseStatePage'
import UseEffectPage from './UseEffectPage';
import UseContextPage from './UseContextPage'
import UseReducerPage from './UseReducerPage'

const Workouts = () => {
    // const state = useSelector((state) => state)  //enter state
    const allActivities = useSelector((state) => state.activities)
    // console.log("state", state)
    const [add, setAdd] = useState(false);

    const [showHooks, setShowHooks] = useState(true);

    const [showRedux, setShowRedux] = useState(false);


    // console.log(allActivities);

    //  Learn React Redux With React Hooks - React Javascript Tutorial

    return (
        <div className={"workouts-wrapper"}>
            <button onClick={() => setShowRedux(!showRedux)}>Show old redux</button>

            {showRedux && 
                <>
            <h2>My Workouts</h2>

            <button onClick={() => setAdd(!add)}>Add Activity</button> &nbsp;
           

            {add && <AddActivity /> }
            {allActivities.map(activity => {
                console.log(activity)
                return <Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration} />
            })}

<button onClick={() => setShowHooks(!showHooks)}>Toggle</button> &nbsp;
           {showHooks && <Hooks />} 
           </>
        }
        <br />
        &nbsp;
        {/* <UseStatePage /> */}
        {/* <UseEffectPage /> */}
        {/* <UseContextPage /> */}
        <UseReducerPage />
        </div>
    )
};

export default Workouts;