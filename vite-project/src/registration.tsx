import './App.css'

async function login() {
    const apiAddress = 'https://localhost:7239/api';

    const password: string = document.getElementById('password')?.value;
    const phonenumber: string = document.getElementById('phonenumber')?.value;
    const nickname: string = document.getElementById('nickname')?.value;
    const username: string = document.getElementById('username')?.value;
    const Email: string = document.getElementById('Email')?.value;

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


function App() {

    return (
        <>
            <div className="form-container" >
                <h2>Authentication</h2>
                <label className="form-label" htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="form-input" required />
                <label className="form-label" htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="form-input" required />
                <label className="form-label" htmlFor="email">Email:</label>
                <input type="text" id="Email" name="email" className="form-input" required />
                <label className="form-label" htmlFor="nickname">Nickname:</label>
                <input type="text" id="nickname" name="nickname" className="form-input" required />
                <label className="form-label" htmlFor="phonenumber">Phonenumber:</label>
                <input type="text" id="phonenumber" name="phonenumber" className="form-input" required />
                <button type="submit" onClick={login}>In</button>
            </div>
        </>
    )
}

export default App