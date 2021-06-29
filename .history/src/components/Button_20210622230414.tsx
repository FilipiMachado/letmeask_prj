export function Button() {
    const [counter] = u

    function increment() {
        counter++
        console.log(counter)
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}