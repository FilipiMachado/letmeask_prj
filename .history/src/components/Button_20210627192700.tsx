import { ButtonHTMLAttributes } from 'react'

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export function Button({is}: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}