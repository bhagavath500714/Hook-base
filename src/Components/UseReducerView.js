import React, {useReducer, useState} from 'react'

// pure function sticking out side
function reducer(state, action) {
    switch (action.type) {
        case "add-todo":
            return {todos: [...state.todos, {text: action.text, completed: false }],
            todoCount: state.todoCount + 1
        };
            case "toggle-todo":
                return {
                    todos: state.todos.map((t, idx) => 
                        idx === action.idx ? { ...t, completed: !t.completed } : t
                    ),
                    todoCount: state.todoCount
                };
        default:
            return state;
    }
}

export const UseReducerView = () => {
    const [{ todos, todoCount }, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 });
    const [text, setText] = useState();

    return (
        <>
        <h1>Use reducer</h1>
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({ type: "add-todo", text });
            setText("");
        }}>
            <input value={text} onChange={e => setText(e.target.value)} />
        </form>
    <div>number of todos: {todoCount}</div>
    <pre>{JSON.stringify(todos, null, 2)}</pre>
    {todos.map((t, idx )=> <div key={t.text} onClick={() => dispatch({type: 'toggle-todo', idx })} style={{
        textDecoration: t.completed ? 'line-through': ""
    }}>{t.text}</div>)}
        </>
    )
}