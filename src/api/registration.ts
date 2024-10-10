import URL from "./URL"

interface IRegistrationDto {
        email: string
        username: string
        nickname: string
        phonenumber: string
        password: string
}

const registration = async (props: IRegistrationDto) => {
    const apiAddress = 'https://localhost:7239/api'

    const UserForregistrationDto = JSON.stringify({
        ...props
    })
    console.log(UserForregistrationDto)
    await fetch(URL.registration, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: UserForregistrationDto,
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

export default registration
