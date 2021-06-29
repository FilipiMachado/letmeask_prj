export function Button() {
    const [counter] = use

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