import {useState} from 'react'


const Counter = () => {
    const[increment, setIncrement] = useState(0)
    return <div>Počítadlo: {increment} <button onClick={()=>setIncrement(increment + 1)}>Zvýšit</button></div>
}

export default Counter