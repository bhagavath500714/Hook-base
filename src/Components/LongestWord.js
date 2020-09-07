import React, {useState, useMemo, useCallback} from 'react'
import { useFetch } from './useFetch'

// function computeLongestWord(arr){
//     if (!arr) {
//         return [];
//     }
//     console.log("computing-........");
    

//     let longestWord = "";

//     JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     })

//     )

//     return longestWord;
// }

export const LongestWord = () => {
    const [count, setCount] = useState(0);
    const { data } = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json");

// with callback function 

const computeLongestWord = useCallback(arr => {
    if (!arr) {
        return [];
    }
    console.log("computing-........");
    

    let longestWord = "";

    JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })

    )

    return longestWord;
}, []);


const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

    return (
        <> 
        <div >count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
            <h1>Block</h1>
    <div>{longestWord}</div>
        </>
    )
}