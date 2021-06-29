export function Button() {
    let counter = 0

    function increment() {
        counter ++
    }

    return (
        <button onClick={counter}>0</button>
    )
}