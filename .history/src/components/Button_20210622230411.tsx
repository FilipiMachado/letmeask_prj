export function Button() {
    const [counter] = 

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