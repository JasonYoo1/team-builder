import React, { useState } from 'react';
import { UserCard } from './UserCard'

export const TeamForm = () => {
    //setting states for each input
    const [inputUser, setInputUser] = useState({
        username: '',
        email: '',
        role:''
    });



    const submitHandler = (event => {
        event.preventDefault()
        console.log(inputUser)
    })

    const changeHandler = (event) => {
        console.log(event.target)
    }

    return (
        <div className="App">
        <form onSubmit = {submitHandler}>
          <label>
            USERNAME
              <input 
              id='username-value'
              type='text'
              placeholder='Enter User'
                //setInputUser (setState) changes state everytime the value of the enter user text changes.
                onChange={event => 
                    {setInputUser({...inputUser, username: event.target.value})}
                }
              />
              EMAIL
              <input
              type='text'
              placeholder='Enter Email'
              onChange={event => 
                {setInputUser({...inputUser, email: event.target.value})}
              }
              />
              ROLE
              <input
              type='text'
              placeholder='Enter Role'
              onChange={event => 
                {setInputUser({...inputUser, role: event.target.value})}
              }
              />
          </label>
          <button>Edit</button>
        </form>
    </div>
    );
}
