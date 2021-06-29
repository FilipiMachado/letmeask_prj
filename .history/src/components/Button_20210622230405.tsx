export function Button() {
    const []

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