import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { UserContext, ChannelContext } from './UseContextPage'

const ComponentA = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
        <ComponentB />
        A {user} - {channel}
        </div>
    )
}
export default ComponentA