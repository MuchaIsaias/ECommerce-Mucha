import { useState, useEffect } from "react"
import {Link, useParams } from "react-router-dom"
import products from "../products.json"

export const ItemDetailContainer = () => {
	const [productId, setProductId] = useState(null)
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
		</main>
	)
}
