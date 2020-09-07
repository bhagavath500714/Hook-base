import React from 'react'
import { useCountRenders } from './useCountRenders';

export const CallbackHook = React.memo(({increment}) => {
    useCountRenders()
    return <button onClick={increment}>Hello</button>
});