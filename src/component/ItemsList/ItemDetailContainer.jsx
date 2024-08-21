import { useState, useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import { ItemContext } from "../../contexts/ItemsContext"
import{getFirestore,getDoc,doc} from "firebase/firestore"
import { ItemsCount } from "./ItemCount"

export const ItemDetailContainer = () => {
	const [productId, setProductId] = useState(null)
	const { addItem } = useContext(ItemContext)
	const { id } = useParams()  

	useEffect(() => {
		const db= getFirestore()
        const refCollection=doc(db,"Items",id)
		getDoc(refCollection).then((snapshot)=>{
			if(snapshot.exists()){
				setProductId({id:snapshot.id,...snapshot.data()})
			}
		})
	}, [id])

	const onAdd = (count)=>{
		addItem ({...productId,quantity :count})
	}

    if (!productId) return <div>Loading...</div>
	return (
		<main key={productId.id}>
			<h1>Detalle del producto:</h1>
			<h2 className="a">{productId.title}</h2>
			<img width={300} src={productId.image} alt={productId.title} />
			<p className="a">{productId.descripcion}</p> 
			<p className="a">{productId.price}</p>
			<ItemsCount stock={productId.stock} onAdd={onAdd}/>
		</main>
	)
}
