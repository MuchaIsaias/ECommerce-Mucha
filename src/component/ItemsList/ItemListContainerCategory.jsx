import React from 'react';
import { useState,useEffect } from 'react'
import {Link,useParams } from 'react-router-dom';
import {Container,Card,Button} from 'react-bootstrap'
import{getFirestore,collection,getDocs, query,where} from "firebase/firestore"

const ItemListContainerCategory = ()=>{
    const [product, setproduct] = useState([]);
    const {categoryid}=useParams()

    useEffect(() => {
        const db= getFirestore()
        const refCollection=!id
		?collection(db,"Items")
		:query(collection(db,"Items"))
        getDocs(refCollection).then((snapshot)=>{
			setProductId(
				snapshot.docs.map((doc)=>{
					return{id:doc.id,...doc.data()}
				})
				)
		})
        mypromise.then(response=>{
            const items= response.filter(i=>i.category===category)
            setproduct(items)
            console.log(product)
        })
	}, [categoryid])
    
    if (!product) return <div>Loading...</div>
    
    return(
        <Container className='row productos'>
        {product.map(productslista=>(
        <Card key={productslista.id} className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 conteiner-cards border rounded'>
            <Card.Img src={productslista.img} className='img-productos'/>
            <Card.Body>
				<Card.Title>{productslista.nombre}</Card.Title>
				<Card.Text>{productslista.precio}</Card.Text>
				<Card.Text>{productslista.category}</Card.Text>
				<Link to={`/item/${productslista.id}`}>
					<Button>Ver más</Button>
				</Link>
			</Card.Body>
        </Card>
        ))}
        </Container>
    )
} 
export default ItemListContainerCategory