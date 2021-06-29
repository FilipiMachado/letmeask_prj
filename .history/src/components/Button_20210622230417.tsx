import { useState } from "react"

export function Button() {
    const [counter] = useState

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