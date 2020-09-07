
import { useState, useRef, useLayoutEffect } from 'react'
// export const useMeasure = (ref, deps) => {
export const useMeasure = (deps) => {
    const [rect, setRect] = useState({});
    const myRef = useRef();

    useLayoutEffect(() => {
        // console.log(divRef.current.getBoundingClientRect());
        setRect(myRef.current.getBoundingClientRect());
    }, deps);

    return [rect, myRef];
};