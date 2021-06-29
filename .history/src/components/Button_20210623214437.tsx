import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}
