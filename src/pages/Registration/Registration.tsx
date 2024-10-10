import { useState } from 'react'
import registration from '../api/registration'

const Signon = () => {
    const [username, setUsername] = useState('')
    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const [email, setEmail] = useState('')
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const [nickname, setNickname] = useState('')
    const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.currentTarget.value)
    }

    const [password, setPassword] = useState('')
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const [phonenumber, setPhonenumber] = useState('')
    const onPhonenumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhonenumber(e.currentTarget.value)
    }

    const handleLogin = async () => {
        registration({ username, email, nickname, password, phonenumber })
    }

    return (
        <div className="form-container">
            <h2>Authentication</h2>
            <label className="form-label" htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={onUsernameChange}
                name="username"
                className="form-input"
                required
            />

            <label className="form-label" htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={onPasswordChange}
                name="password"
                className="form-input"
                required
            />

            <label className="form-label" htmlFor="email">
                Email:
            </label>
            <input
                type="text"
                id="Email"
                value={email}
                onChange={onEmailChange}
                name="email"
                className="form-input"
                required
            />

            <label className="form-label" htmlFor="nickname">
                Nickname:
            </label>
            <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={onNicknameChange}
                name="nickname"
                className="form-input"
                required
            />

            <label className="form-label" htmlFor="phonenumber">
                Phonenumber:
            </label>
            <input
                type="text"
                id="phonenumber"
                value={phonenumber}
                onChange={onPhonenumberChange}
                name="phonenumber"
                className="form-input"
                required
            />

            <button type="submit" onClick={handleLogin}>
                In
            </button>
        </div>
    )
}

export default Signon
