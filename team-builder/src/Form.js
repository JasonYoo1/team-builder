import React, { useState } from 'react';

export const TeamForm = () => {
    const [inputData, setInputData] = useState(" ");
    const submitHandler = (event) => {
      event.preventDefault()
      console.log()
    }
    return (
        <div className="App">
        <form >
          <label>
            UserName
              <input 
              id='username-value'
              type='text'
              placeholder='Enter User'
                onChange={event => 
                    {console.log(event.target.value)}
                }
              />
              <input
              type='text'
              placeholder='email'
              />
              <input
              type='text'
              placeholder='role'
              />
          </label>
        </form>
    </div>
    );
}

