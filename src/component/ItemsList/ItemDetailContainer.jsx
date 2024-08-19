import { useState, useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import { ItemContext } from "../../contexts/ItemsContext"
import{getFirestore,collection,getDocs, query,where} from "firebase/firestore"

export const ItemDetailContainer = () => {
	const [productId, setProductId] = useState(null)
	const { addItem } = useContext(ItemContext)
	const { id } = useParams()  

	useEffect(() => {
		const db= getFirestore()
        const refCollection=!id
		?collection(db,"Items")
		:query(collection(db,"Items"))
		getDocs(refCollection).then((snapshot)=>{
			setProductId(
				snapshot.docs.find((doc)=>{
					return(
						{id:doc.id,...doc.data()})
				})
				)
		})
	}, [id])

    if (!productId) return <div>Loading...</div>
	return (
		<main>
			<h1>Detalle del producto:</h1>
			<h2>{productId.title}</h2>
			<img width={300} src={productId.image} alt={productId.title} />
			<p>{productId.descripcion}</p> 
			<p>{productId.price}</p>
			<button type="button" onClick={()=>addItem(productId)}>
				Carrito
			</button>
		</main>
	)
}
