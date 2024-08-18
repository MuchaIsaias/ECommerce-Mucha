import { useState, useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import products from "../../products.json"
import { ItemContext } from "../../contexts/ItemsContext"

export const ItemDetailContainer = () => {
	const [productId, setProductId] = useState(null)
	const { addItem } = useContext(ItemContext)
	const { id } = useParams()  

	useEffect(() => {
        const mypromise = new Promise((resolve,reject)=>{
            resolve(products)
        })
        mypromise.then(response=>{
            const items= response.find(i=>i.id==Number(id))
            setProductId(items)
        })
	}, [id])
    if (!productId) return <div>Loading...</div>
	return (
		<main>
			<h1>Detalle del producto:</h1>
			<h2>{productId.nombre}</h2>
			<img width={300} src={productId.img} alt={productId.nombre} />
			<p>{productId.detail}</p> 
			<button type="button" onClick={()=>addItem(productId)}>
				Carrito
			</button>
		</main>
	)
}
