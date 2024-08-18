import cart from '../../assets/carro.png'
import {NavLink} from "react-router-dom"
const CartWidget= ( ) =>{
    
    return(
        <div style={{display: "flex",fontSize: "2.8rem",alignItems: "center"}}>
            <NavLink to="/category/Cart">
                <img style={{width:"6rem",padding:"0.5rem" }} src={cart} alt="Cart-Widget" />  
            </NavLink>
        </div>
    )
}
export default CartWidget