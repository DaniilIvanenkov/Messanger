interface ILogin {
    username: string
    password: string
}

async function login({ username, password }: ILogin) {
    const apiAddress = 'https://localhost:7239/api'

    const UserForAuthenticationDto = JSON.stringify({
        username,
        password,
    })

    console.log(UserForAuthenticationDto)

    await fetch(`${apiAddress}/authentication/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: UserForAuthenticationDto,
    }).then(async (data) => {
        const token = await data.text()
        console.log(token)
        await fetch(`${apiAddress}/authentication`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
    })
}

export default login
