import React from 'react';
import { useState,useEffect,useContext}from 'react'
import {Link } from 'react-router-dom';
import {Container,Card} from 'react-bootstrap'
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
        <Container className='productos row todos-los-productos'>
        {product.map(productslista=>(
        <Card key={productslista.id} className='col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 contenedor-productos'>
            <Card.Body className='conteiner-cards '>
                <Card.Img src={productslista.image} className='img-productos'/>
				<Card.Title className="nombre-producto">{productslista.title}</Card.Title>
				<Card.Text className="precio-producto">{productslista.price}</Card.Text>
				<Card.Text className="nombre-producto">{productslista.categoryid}</Card.Text>
                <div className="conteiner-button">
                    <Link to={`/item/${productslista.id}`}>
					    <button type="button" className="btn btn-primary cambios" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://i.imgur.com/Km3Td7U.png" alt="foto-de-un-ojo"/>
                        </button>
				    </Link>
                    <button type="button" onClick={()=>addItem(productslista)} className="btn btn-primary cambios btn-agregar-carrito">
				        <img src="https://i.imgur.com/lwe0RDI.png" alt="foto-de-una-imagen-de-carritos-de-compras"/>
			        </button>
                </div>
			</Card.Body>
        </Card>
        ))}
        </Container>
    )
} 
export default ItemListContainer