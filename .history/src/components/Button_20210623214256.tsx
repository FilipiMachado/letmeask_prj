type ButtonProps = {
    type: string;
}

export function Button(props) {
    return (
        <button className="button" {...props} />
    )
}
