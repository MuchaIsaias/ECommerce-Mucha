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
                item,
                total: total
            }
            const db= getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection,orden).then(({id})=>{
                if (id) {
                    alert("su orden:"+id+ "ha sido completada")
                    setBuyer(valor)
                }
            })
        }
        else{
            console.log(item)
        }
    }
    
    if (!items) return <div>Loading...</div>
        
    return(
    <div className="cart">
        <h1 className="title-cart">Detalle del producto:</h1>
        <div className="conteiner-cart row w-100">
            <div className="conteiner-cart-items col-xl-5 row w-50">
                {items?.map((i)=>(
                <div key={i.id} className="conteiner-cart-item">
                    <div className="cart-img">
                        <img width={300} src={i.image} alt={i.title} />
                        <p className="a">{i.descripcion}</p> 
                    </div>
                    <div className="cart-text">
                        <p className="a">Precio : {i.price}</p>
                        <p className="a">Catidad :{i.quantity}</p>
                        <p className="a">Total :{total}</p>
                        <button type="button" onClick={()=>Reset()} className="a">
				            RESET
			            </button>
                    </div>
                </div>
                
            ))}
            </div>
            {!!items.length && (
            <div className="col-xl-5 conteiner-cart-form w-45">
                <form action="" className=" " >
                <div className="conteiner-cart-form-div">
                    <label htmlFor="email" className="a">Email:  </label>
                    <input id="email" type="email" name="email" value={buyer.email} onChange={senDatos} required/>
                </div>
                <div className="conteiner-cart-form-div">
                    <label htmlFor="name" className="a">Nombre:  </label>
                    <input id="name" type="text" name="name" value={buyer.name} onChange={senDatos} required/>
                </div>
                <div className="conteiner-cart-form-div"> 
                    <label htmlFor="phone" className="a">telefono:  </label>
                    <input id="phone" type="text" name="phone" value={buyer.phone} onChange={senDatos} required/>
                </div>
                <hr />
                <button type="submit" onClick={()=>senOrden(items)}>
                    Finalizar Compra
                </button>
            </form>
            </div>
            
            )}
        </div>
    </div>
    )
} 
export default Cart
