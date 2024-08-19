import { ItemContext } from "../../contexts/ItemsContext"
import {useContext } from "react"

export const Cart = () =>{
    const { items,Reset } = useContext(ItemContext)
    console.log(items)
    if (!items) return <div>Loading...</div>
    return(
        <>
    {items?.map((i)=>(
        <main key={i.categoryid}>
			<h1>Detalle del producto:</h1>
			<h2>{i.title}</h2>
			<img width={300} src={i.image} alt={i.title} />
			<p>{i.descripcion}</p> 
            <button type="button" onClick={()=>Reset()}>
				Carritooooo
			</button>
        </main>
    ))}
    </>
    )
} 
export default Cart
