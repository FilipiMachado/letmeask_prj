import { ButtonHTMLAttributes } from 'react'

type ButtonProps = Butt

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}
