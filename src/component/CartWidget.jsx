import cart from '../assets/carro.png'
const CartWidget= () =>{
    return(
        <div style={{display: "flex",fontSize: "2.8rem",alignItems: "center"}}>
            <img style={{width:"6rem",padding:"0.5rem"}} src={cart} alt="Cart-Widget" />  
            2
        </div>
    )
}
export default CartWidget