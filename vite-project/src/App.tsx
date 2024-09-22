import './App.css'

async function login() {
    const apiAddress = 'https://localhost:7239/api';

    const userPersonalData: string = document.getElementById('username')?.value;
    const password: string = document.getElementById('password')?.value;
    const UserForAuthenticationDto = JSON.stringify({
        userPersonalData, password
    });
    console.log(UserForAuthenticationDto);
    await fetch(`${apiAddress}/authentication/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: UserForAuthenticationDto
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


function App() {

    return (
        <>
            <div className="form-container">
                <h2>Authentication</h2>
                <label className="form-label" htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="form-input" required />
                <label className="form-label" htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="form-input" required />
                <button type="submit" onClick={login}>In</button>
            </div>
        </>
    )
}

export default App