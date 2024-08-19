import { ItemContext } from "../../contexts/ItemsContext"
import {useContext } from "react"



export const Cart = () =>{
    const { items,Reset } = useContext(ItemContext)
    console.log(items)
    if (!items) return <div>Loading...</div>
    return(
        <>
    {items?.map((i)=>(
        <main key={i.id}>
			<h1>Detalle del producto:</h1>
			<h2>{i.nombre}</h2>
			<img width={300} src={i.img} alt={i.nombre} />
			<p>{i.detail}</p> 
            <button type="button" onClick={()=>Reset()}>
				Carritooooo
			</button>
        </main>
    ))}
    </>
    )
} 
export default Cart
