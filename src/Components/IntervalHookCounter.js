import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0)

    // const tick = () => {
    //     setCount(count + 1)
    // }

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])

    // another way to set is set this previous count increment
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    // whenerer call a function in effec better call funcet to intlize

    // useEffect(() => {
    //     function dosomething() {
    //         console.log(someProp)
    //     }
    //     dosomething()

    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter;