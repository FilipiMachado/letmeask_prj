import { ButtonHTMLAttributes }

type ButtonProps = {
    type: string;
}

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}
