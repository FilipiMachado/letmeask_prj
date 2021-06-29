import { useState } from "react"

export function Button() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        //counter++
        console.log(counter);
    }

    return (
        <button class onClick={increment}>
            {counter}
        </button>
    )
}