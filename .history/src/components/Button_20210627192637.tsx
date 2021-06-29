import { ButtonHTMLAttributes } from 'react'

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined
};

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}