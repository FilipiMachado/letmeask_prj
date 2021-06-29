import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTML>

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}
