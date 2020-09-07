// import { useEffect } from 'react'

// export const useFetch = (url) => {
//     useEffect(() => {
//         // fetch(url).then(x => x.json())
//         fetch(url)
//         .then(x => x.text())
//         .then(y => {
//             console.log(y);
//         });
//     }, [url])

// }


import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
    //    setState({ data: null, loading: true });
       setState(state => ({ data: state.data, loading: true }));

        fetch(url)
        .then(x => x.text())
        .then(y => {
            setState({data: y, loading: false})
        });
    }, [url, setState]);

    return state;

}

 
