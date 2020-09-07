import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [showToggle, setShowToggle] = useState(true)


    return (
        <div>
            <button onClick={() => setShowToggle(!showToggle)}> Toggle mouse</button>
        {showToggle && <HookMouse />}
        </div>
    )
}

export default MouseContainer;