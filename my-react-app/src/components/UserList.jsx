import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

const UserList = memo((props) => {

    const [user, setUser] = useState([]);

    console.log(user);
    /**
     * const user = state[0];
     * const setUser = state[1];
     * useState([]) is the initial state of the user; an empty array.
     */

    const addUserHandler = () => {
        setUser((prevUser) => {
            return [...prevUser, {name: 'Max', age: 28}];
        });
    }


  return (
    <div>
        <button onClick={addUserHandler} >Add User</button>
        <br />  
        <br />
        <ul>
            {user.map((user, index) => {
                return <li key={index}>{user.name} ({user.age} years old)</li>
            })}
        </ul>
    </div>
  )
})

UserList.propTypes = {}

export default UserList