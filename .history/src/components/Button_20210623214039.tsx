import { useState } from "react"

export function Button() {
    const [counter, setCounter] = useState(0);

    

    return (
        <button className="button">
            {counter}
        </button>
    )
}