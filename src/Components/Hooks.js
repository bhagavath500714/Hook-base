import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { useForm } from './useForm'
import { useFetch } from './useFetch'
import { useMeasure} from './useMeasure'

import {CallbackHook} from './CallbackHook'
import { Square } from './Square';
import { LongestWord } from './LongestWord';
import { UseReducerView } from './UseReducerView';

// useState, useEffect, useRef, useLayoutEffect, useCallback, useMemo, useReducer, useContext

// https://www.youtube.com/watch?v=f687hBjwFcM&t=2041s

const Hooks = () => {
   // const [count, setCount] = useState(10);
    // const [{ count, count2}, setCount] = useState({ count: 10, count2: 20 });

    // const [count, setCount] = React.useState(10);
    // const [count2, setCount2] = React.useState(20)

    const [values, handleChange] = useForm({email: '', password: ''});

    // useEffect(() => {
    //     console.log("render");
    // }, [values.password]);  // when password value change triger function

    useEffect(() => {
        console.log("render");

        // cleanup function
        return () => {
            console.log('unmount');
        }
    }, []);   // if u give value here when password typed it will call both render and unmount

    // Event listener with use Effect
    // useEffect(() => {
    //     const onMouseMove = e => {
    //         console.log(e);
    //     };
    //     window.addEventListener("mousemove", onMouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", onMouseMove);
    //     };
    // }, [])

    // useFetch("http://numbersapi.com/43/trivia");
    // const {data, loading} = useFetch("http://numbersapi.com/43/trivia");
    const [count, setCount] = React.useState(() => JSON.parse(localStorage.getItem("count")));
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    const inputRef = React.useRef();
    const hello = React.useRef(() => console.log('hello'));

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    // useLayoutEffect(() => {
    //     console.log(inputRef.current.getBoundingClientRect());
    // }, []);

    // const [rect, setRect] = React.useState({});
    // const divRef = React.useRef();

    // useLayoutEffect(() => {
    //     // console.log(divRef.current.getBoundingClientRect());
    //     ssetRect(divRef.current.getBoundingClientRect());
    // }, [data]);

    // const rect = useMeasure(divRef, [data])
    const [rect, divRef] = useMeasure([data]);


    // other use
    // const [rect, inputRef2] = useMeasure([]);
// input
{/* <input ref={inputRef2} /> */}


const [useCall, setUseCall] = useState(0);

const favoriteNums = [7, 21, 37];

// const increment = useCallback(() => {
//     setUseCall(c => c + 1);
// }, [setUseCall]);

const increment = useCallback(
    n => {
    setUseCall(c => c + n);
}, 
[setUseCall]
);



    return (
        <>
             {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            {/* <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button> */}
            {/* <button onClick={() => setCount(currentState => ({
                // ...currentState,
                count: currentState.count + 1,
                cont2: currentState.count2 + 1
            }))
            }>+</button> */}
            {/* <div>{loading ? "loading..." : data}</div> */}
            {/* <div>{!data ? "loading..." : data}</div> */}
            <div style={{display: 'flex'}}>
            <div ref={divRef}>{!data ? "loading..." : data}</div>
            </div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
            <button onClick={() => setCount(c => c + 1)}>Fetch btn</button>

{/* <button onClick={() => {
                setCount(c => c + 1);
                setCount2(c => c + 1);
            }}>+</button>
            


            <div>count 1: {count}</div>
            <div>count 2: {count2}</div> */}

            <div>
                <input ref={inputRef} name="email" value={values.email} onChange={handleChange} />
                <input name="password" value={values.password} onChange={handleChange} type="password"/>
                <button onClick={() => {
                    // console.log(inputRef.current);
                    inputRef.current.focus();
                    hello.current();
                }}>Focus</button>
                <br />
                {/* <div>=========================================</div> */}
                {/* <CallbackHook increment={() => setUseCall(useCall + 1)}/> */}
                {/* <CallbackHook increment={increment}/> */}
            <div>count : {useCall}</div>
            {favoriteNums.map(n => {
                return <Square increment={increment} n={n} key={n} />;
            })}

            <LongestWord />
            <UseReducerView />
            </div>
        </>
    )
}

export default Hooks;