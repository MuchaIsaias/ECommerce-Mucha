import React from 'react';
import { useState,useEffect}from 'react'
import ProductLIst from "../../products.json"
import {Link,useParams } from 'react-router-dom';
import {Container,Card,Button} from 'react-bootstrap'

const ItemListContainer = ()=>{
    const [product, setproduct] = useState([]);
    const {nombre} = useParams()

    useEffect(()=>{
        const mypromise = new Promise(resolve=>resolve(ProductLIst))
            mypromise
            .then(data=>{
                if (!nombre) {
                    setproduct(data)
                }else{
                    const items=data.filter(i=>i.produc=nombre)
                    setproduct(items)
                    
                }
            })
        },[nombre])
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
export default ItemListContainer