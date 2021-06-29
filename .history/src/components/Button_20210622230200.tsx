export function Button() {
    let counter = 0

    function increment() {
        counter++
        console.log(counter)
    }

    return (
        <button onClick={increment}>{counter}</button>
    )
}