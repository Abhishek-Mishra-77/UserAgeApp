import React, { Fragment } from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList = (props) => {
    return (
        <Fragment>
            <Card className={classes.users}>
                <ul>
                    {props.users.map((user) => (
                        <li key={user.id}>

                            {user.name}  - {user.age} years old --  {user.college}
                        </li>
                    ))}
                </ul>
            </Card>
        </Fragment>
    )
}

export default UserList;