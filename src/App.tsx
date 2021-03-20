import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {v1} from 'uuid';
import './App.css';

type userType = {
    id: string
    name: string
}

function App() {
    const addUser = (name: string) => {
        const newUser: userType = {
            id: v1(),
            name: name
        }
        const newAddUser = [newUser, ...user]
        setUser(newAddUser)
    }
    let [user, setUser] = useState<Array<userType>>([])

    const [name, setName] = useState<string>('')
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const changeNameEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addName()
        }
    }
    const addName = () => {
        addUser(name)
        setName(' ')
        alert('Hi ' + name)
    }

    return (
        <div className="App">
            <h1>Homework 3</h1>
            <div className={'addInput'}>
                <input value={name} type="text" onChange={changeName} onKeyPress={changeNameEnter}/>
                <button onClick={addName}>Add</button>
            </div>
            Количество юзеров: {user.length}
            <div>
                {user.map((u) => {
                    return <div> {u.name}</div>
                })}
            </div>
        </div>
    );
}

export default App;
