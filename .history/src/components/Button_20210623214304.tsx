type ButtonProps = {
    type: string;
}

export function Button(props: bu) {
    return (
        <button className="button" {...props} />
    )
}
