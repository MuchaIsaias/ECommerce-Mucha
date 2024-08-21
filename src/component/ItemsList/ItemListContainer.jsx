import React from 'react';
import { useState,useEffect,useContext}from 'react'
import {Link } from 'react-router-dom';
import {Container,Card,Button} from 'react-bootstrap'
import{getFirestore,collection,getDocs} from "firebase/firestore"
import { ItemContext } from "../../contexts/ItemsContext"

const ItemListContainer = ()=>{
    const [product, setproduct] = useState([]);
    const { addItem } = useContext(ItemContext)


    useEffect(()=>{
            const db= getFirestore()
            const refCollection=collection(db,"Items")
            getDocs(refCollection).then((snapshot)=>{
                setproduct(
                    snapshot.docs.map((doc)=>{
                        return{id:doc.id,...doc.data()}
                    })
                    )
            })
        },[])
    return(
        <Container className='row productos'>
        {product.map(productslista=>(
        <Card key={productslista.id} className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 conteiner-cards border rounded'>
            <Card.Img src={productslista.image} className='img-productos'/>
            <Card.Body>
				<Card.Title>{productslista.title}</Card.Title>
				<Card.Text>{productslista.price}</Card.Text>
				<Card.Text>{productslista.categoryid}</Card.Text>
				<Link to={`/item/${productslista.id}`}>
					<Button>Ver más</Button>
				</Link>
                <button type="button" onClick={()=>addItem(productslista)}>
				Carrito
			</button>
			</Card.Body>
        </Card>
        ))}
        </Container>
    )
} 
export default ItemListContainer