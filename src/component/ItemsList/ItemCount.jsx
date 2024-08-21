
import { useState } from "react"

export const ItemsCount = ({onAdd,stock}) =>{
    const [count,setCount] = useState(1)

    const handleIcrease = () =>{
        if(count<stock){
            setCount((prev)=>prev+1)
        }
    }

    
    const handleDecrease = () =>{
        if (count>1) {
            setCount((prev)=>prev-1)
        }
    }

    const handleAdd = () =>{
        onAdd(count)
    setCount(1)
}
    return(
        <div>
            <button className="a" onClick={handleIcrease}>+</button>
            <span className="a">{count}</span>
            <button className="a"onClick={handleDecrease}>-</button>
            <hr />
            <button className="a" onClick={handleAdd}>agregar al carrito</button>       
        </div>
    )
}