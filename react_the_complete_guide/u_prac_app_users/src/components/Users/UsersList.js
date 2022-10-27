import React from 'react';
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {

    console.log(props.users);

    return (
        <ul>
            {props.users.map((user) => {
                return (
                    <Card className={classes.users}>
                        <li key={user.id}>
                            {user.name} ({user.age} years old)
                        </li>
                    </Card>
                    
                );
            })}
        </ul>
    );
};

export default UserList;