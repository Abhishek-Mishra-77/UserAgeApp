import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUsers.module.css';
import Wrapper from "../Helpers/Wrapper";
import ErrorMode from "../UI/ErrorModel";


const UserInput = (props) => {

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserage, setEnteredUserage] = useState('');
    const [error, setError] = useState();

    const UserName = useRef();
    const UserAge = useRef();

    const addInputHandler = (event) => {
        event.preventDefault();
        const enterdUserName = UserName.current.value;
        const enteredUserage = UserAge.current.value;
        if (enterdUserName.trim().length === 0 || enteredUserage.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if (+enteredUserage < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (> 0 ).'
            })
            return;
        }

        props.onAddUser(enterdUserName, enteredUserage);
        // setEnteredUsername('');
        // setEnteredUserage('')
        UserName.current.value = '';
        UserAge.current.value = '';
    }

    // UserName 
    // const userNameChangeHandler = (event) => {
    //     // setEnteredUsername(event.target.value);
    //     
    // }

    // // UserAge
    // const userAgeChangeHandler = (event) => {
    //     // setEnteredUserage(event.target.value);
    //    
    // }


    const errorHandler = () => {
        setError(null)
    }


    return (
        <Wrapper>
            {error && <ErrorMode
                onConfirm={errorHandler}
                data={props.onAddUser}
                title={error.title}
                message={error.message} />}

            <Card className={classes.input}>
                <form onSubmit={addInputHandler}>
                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        type="text"
                        ref={UserName}
                    // value={enteredUsername}
                    // onChange={userNameChangeHandler}  
                    />
                    <label htmlFor="Age">Age (Years)</label>
                    <input
                        id="Age"
                        type="number"
                        ref={UserAge}
                    // value={enteredUserage}
                    // onChange={userAgeChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default UserInput;