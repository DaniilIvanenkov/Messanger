import React from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
    return <input {...props} />
}

export default Input
