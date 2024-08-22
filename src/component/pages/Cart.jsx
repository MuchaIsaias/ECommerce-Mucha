import { ItemContext } from "../../contexts/ItemsContext"
import {useContext,useState } from "react"
import {addDoc,collection,getFirestore} from "firebase/firestore"

const valor={
    name:" ",
    phone:" ",
    email:" "
}
export const Cart = () =>{
    const { items,Reset } = useContext(ItemContext)
    const [buyer,setBuyer]=useState(valor)

    const total = items.reduce((acc,act)=>acc + act.price * act.quantity,0)

    const senDatos= (evt)=>{
        setBuyer((prev)=>{
            return {...prev,[evt.target.name]:evt.target.value}
        });
    };
    const senOrden=(item)=>{
        if(item){
            const orden = {
                buyer,
                item
            }
            const db= getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection,orden).then(({id})=>{
                if (id) {
                    alert("su orden:"+id+ "ha sido completada")
                }
            })
        }
        else{
            console.log(item)
        }
    }
    
    if (!items) return <div>Loading...</div>
        
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
            
            <button type="button" onClick={()=>Reset()}>
				RESET
			</button>
        </main>
    ))}
    <p className="a">Total :{total}</p>
    {!!items.length && (
        <form action="">
            <div>
            <label htmlFor="email" className="a">Email:</label>
            <input id="email" type="email" name="email" value={buyer.email} onChange={senDatos}/>
        </div>
        <div>
            <label htmlFor="firstName" className="a">Nombre:</label>
            <input id="firstName" type="text" name="firstName" value={buyer.name} onChange={senDatos}/>
        </div>
        <div>
            <label htmlFor="lastName" className="a">Apellido:</label>
            <input id="lastName" type="text" name="lastName" value={buyer.phone} onChange={senDatos}/>
        </div>
        <button type="button" onClick={()=>senOrden(items)}>
            Comprar
        </button>
        </form>
    )}
    </>
    )
} 
export default Cart
