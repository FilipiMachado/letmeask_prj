import { ButtonHTMLAttributes } from 'react'

import "../styles/b"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}