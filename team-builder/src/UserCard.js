import React from 'react';
import {Workers} from './Data'

export const UserCard = (props) => {
    return(
    <div>
        <p>UserName: {props.username}</p>
        <p>Email: {props.email}</p>
        <p>Role: {props.role}</p>
        
        
        {/* <p>Hello World</p> */}
    </div>
    )
}