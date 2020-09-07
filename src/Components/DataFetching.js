import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res)
    //         setPosts(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])


    // const [post, setPost] = useState({})
    // const [id, setId] = useState(1)

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         console.log(res)
    //         setPost(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [id])

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            {/* <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
            {/* get indudal post */}
            {/* <input type="text" value={id} onChange={e => setId(e.target.value)} />
            {post.title} */}
            {/* get data on btn click */}
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            {post.title}
            <button onClick={handleClick}>Fetch post</button>
        </div>
    )
}
export default DataFetching;