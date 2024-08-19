import cart from '../../assets/carro.png'
import {NavLink} from "react-router-dom"
import { ItemContext } from "../../contexts/ItemsContext"
import {useContext } from "react"

const CartWidget= ( ) =>{
    const { items} = useContext(ItemContext)
    return(
        <div style={{display: "flex",fontSize: "2.8rem",alignItems: "center"}}>
            <NavLink to="/category/Cart">
                <img style={{width:"6rem",padding:"0.5rem" }} src={cart} alt="Cart-Widget" />
                <span>{items.length}</span>
            </NavLink>
        </div>
    )
}
export default CartWidget