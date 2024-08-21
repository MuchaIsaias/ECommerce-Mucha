import { ItemContext } from "../../contexts/ItemsContext"
import {useContext } from "react"

export const Cart = () =>{
    const { items,Reset } = useContext(ItemContext)
    console.log(items)
    if (!items) return <div>Loading...</div>
    {}
    return(
        <>
    {items?.map((i)=>(
        <main key={i.id}>
			<h1 className="a">Detalle del producto:</h1>
			<h2 className="a">{i.title}</h2>
			<img width={300} src={i.image} alt={i.title} />
			<p className="a">{i.descripcion}</p> 
            <p className="a">Catidad :{i.quantity}</p>
            <p className="a">Precio : {i.price}</p>
            <p className="a">Total :</p>
            <button type="button" onClick={()=>Reset()}>
				RESET
			</button>
        </main>
    ))}
    {!!items.length && (
        <form action="">
            <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" />
        </div>
        <div>
            <label htmlFor="firstName">Nombre:</label>
            <input id="firstName" type="text" name="firstName" />
        </div>
        <div>
            <label htmlFor="lastName">Apellido:</label>
            <input id="lastName" type="text" name="lastName" />
        </div>
        <button type="button">
            Comprar
        </button>
        </form>
    )}
    </>
    )
} 
export default Cart
