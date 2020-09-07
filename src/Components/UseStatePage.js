import React, {useState} from 'react'


const UseStatePage = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const [name, setName] = useState({ firstName: '', lastName: '' })
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1 //random no between 1 to 10
        }])
    }

    return (
        <div>
        {/* set state based on previous set value */}
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Initial Count</button>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
        <h6>============Use state with objects=========</h6>
        <form>
            <input 
            type='text'
            value={name.firstName}
            onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input 
            type='text'
            value={name.lastName}
            onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h5>First Name: {name.firstName}</h5>
            <h5>Last Name: {name.lastName}</h5>
            <h5>{JSON.stringify(name)}</h5>
        </form>
        <h6>============Use state with Array=========</h6>
        <button onClick={addItem}>Add a number </button>
        <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
        </ul>
       </div>
    )
}

export default UseStatePage;