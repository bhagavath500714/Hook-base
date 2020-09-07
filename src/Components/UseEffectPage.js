import React, {useState, useEffect} from 'react'
import MouseContainer from './MouseContainer'
import IntervalHookCounter from './IntervalHookCounter'
import DataFetching from './DataFetching'

const UseEffectPage = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // const [x, setX] = useState(0)
    // const [y, setY] = useState(0)

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `you clicked ${count} times`
    }, [count])

    // const logMousePosition = e => {
    //     console.log('Mouse event')
    //     setX(e.clientX)
    //     setY(e.clientY)
    // }

    // useEffect(() => {
    //     console.log('useEffect called')
    //     window.addEventListener('mousemove', logMousePosition)
    // }, [])

   return (
        <div>
            {/* conditional rendering */}
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            {/* useeffect runs after every render */}
    <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    {/* call effect only once  */}
    {/* Hook X - {x} Y - {y} */}
    {/* useeffect cleanup function */}
    {/* <MouseContainer /> */}
    {/* effect chaange based on dependence  */}
    {/* <IntervalHookCounter /> */}
    {/* data fetch using use effect */}
    <DataFetching />
    </div>
    )
}

export default UseEffectPage;