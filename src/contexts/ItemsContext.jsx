import {createContext,useState } from "react";

export const ItemContext = createContext()

export const Provider = ({children}) =>{
    const [items,setItems]=useState([])
    
    const addItem = (item)=>{
        setItems((prev)=>[...prev,item])
    } 
    const Reset=()=>{
        setItems([])
    }
    console.log(items.length)

    return(
        <ItemContext.Provider value={{ items,addItem,Reset }}>
            {children}
        </ItemContext.Provider>
    )
}