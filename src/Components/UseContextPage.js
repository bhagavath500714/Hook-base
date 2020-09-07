import React from 'react'
import ComponentA from './ComponentA'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const UseContextPage = () => {
    return (
        <UserContext.Provider value={'example'}>
            <ChannelContext.Provider value={'Code expo'}>
                <ComponentA />
            </ChannelContext.Provider>
        </UserContext.Provider>
    )
}
export default UseContextPage