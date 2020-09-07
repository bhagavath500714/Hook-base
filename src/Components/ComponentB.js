import React from 'react'
import { UserContext, ChannelContext  } from './UseContextPage'

const ComponentB = () => {
    return (
       <UserContext.Consumer>
           {user => {
               return (
                   <ChannelContext.Consumer>
                       {channel => {
                           return (
                           <div>B {user} - {channel}</div>
                           )
                       }}
               
               </ChannelContext.Consumer>
               )
           }}
       </UserContext.Consumer>
    )
}
export default ComponentB