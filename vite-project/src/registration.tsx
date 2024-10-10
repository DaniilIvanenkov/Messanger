import React, { useState } from 'react';
import './App.css'

async function login() {
    const apiAddress = 'https://localhost:7239/api';

    //const password: string = document.getElementById('password')?.value;
    //const phonenumber: string = document.getElementById('phonenumber')?.value;
    //const nickname: string = document.getElementById('nickname')?.value;
    //const username: string = document.getElementById('username')?.value;
    //const Email: string = document.getElementById('Email')?.value;
    
    const UserForregistrationDto = JSON.stringify({
          Email, username, nickname, phonenumber, password
    });
    console.log(UserForregistrationDto);
    await fetch(`${apiAddress}/authentication/registration`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: UserForregistrationDto
    }).then(async (data) => {
        const token = await data.text();
        console.log(token);
        await fetch(`${apiAddress}/authentication`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`
            }
        })
    })
}

const [username, setUsername] = useState("")

    const onUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)}



    const [Email, setEmail] = useState("")

    const onEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)}



    const [nickname, setNickname] = useState("")
        
    const onNicknameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.currentTarget.value)}



    const [password, setPassword] = useState("")

    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)}


        const [phonenumber, setPhonenumber] = useState("")

    const onPhonenumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPhonenumber(e.currentTarget.value)}

function App() {
    
    return (
        <>
            <div className="form-container" >
                <h2>Authentication</h2>
                <label className="form-label" htmlFor="username">Username:</label>
                <input type="text"  id="username" value={username} onChange={onUsernameChange} name="username" className="form-input" required />
                
                <label className="form-label" htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={onPasswordChange} name="password" className="form-input" required />
                
                <label className="form-label" htmlFor="email">Email:</label>
                <input type="text" id="Email" value={Email} onChange={onEmailChange} name="email" className="form-input" required />
                
                <label className="form-label" htmlFor="nickname">Nickname:</label>
                <input type="text" id="nickname" value={nickname} onChange={onNicknameChange} name="nickname" className="form-input" required />
                
                <label className="form-label" htmlFor="phonenumber">Phonenumber:</label>
                <input type="text" id="phonenumber" value={phonenumber} onChange={onPhonenumberChange} name="phonenumber" className="form-input" required />
                
                <button type="submit" onClick={login}>In</button>
            </div>
        </>
    )
}

export default App