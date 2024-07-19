import react, { useState } from 'react'
function range() {
    const [length, setlength] = useState(50)
    const [max, setmax] = useState(50000)
    return (
        <div>
            <input
                type="range"
                value={length}
                min={50}
                max={50000}
                onChange={(e) => setlength(e.target.value)}


            />
            <span>$ {length}</span>


            <input
                type="range"
                value={max}
                min={50}
                max={50000}
                onChange={(e) => setmax(e.target.value)}


            />
            <span>$ {max}</span>
        </div>
    )
}

export default range