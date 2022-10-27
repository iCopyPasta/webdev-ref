import React, {useState}from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {

    const [usersList, setUsersList] = useState([]);

    const onAddUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            const newUser = {
                name: userName,
                age: userAge,
                id: Math.random().toString()
            };

            console.log(newUser.id)
            console.log(newUser)
            return [...prevUsersList, newUser]
        });
    };

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler}></AddUser>
            <UserList users={usersList}></UserList>
        </div>
    );
}

export default App;
