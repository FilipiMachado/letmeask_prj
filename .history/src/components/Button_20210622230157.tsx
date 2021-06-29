export function Button() {
    let counter = 0

    function increment() {
        counter ++
        console.log()
    }

    return (
        <button onClick={increment}>{counter}</button>
    )
}