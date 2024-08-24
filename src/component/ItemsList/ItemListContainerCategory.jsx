import React from 'react';
import { useState,useEffect } from 'react'
import {Link,useParams } from 'react-router-dom';
import{getFirestore,collection,getDocs, query,where} from "firebase/firestore"
import {NavLink} from "react-router-dom"

const ItemListContainerCategory = ()=>{
    const [product, setproduct] = useState([]);
    const {categoryid}=useParams()

    useEffect(() => {
		const db= getFirestore()
        const refCollection=collection(db,"Items")
        const q = query(refCollection, where('categoryid', '==', categoryid));
		getDocs(q).then((snapshot)=>{
			setproduct(
                snapshot.docs.map((doc)=>{
                    return{id:doc.id,...doc.data()}
                })
                )
		})
	}, [categoryid])

    if (!product)return <div>Loading...</div>
    
    return(
        <main className="main-tienda row">
    <h2 className="col-xl-12">Todos Los Productos : </h2>
    <section className="col-xl-3 col-lg-3 col-md-12 tienda-categorias">
      <h3>Categorias</h3>
      <ul>
      <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
        <li><NavLink to="/category/Notebooks">Notebooks</NavLink></li>
        <li><NavLink to="/category/PcArmadas">PcArmadas</NavLink></li>
        <li><NavLink to="/category/Hardware">Hardware</NavLink></li>
        <li><NavLink to="/category/Monitores">Monitores</NavLink></li>
        <li><NavLink to="/category/Software">Software</NavLink></li>
        <li><NavLink to="/category/Gamers">Gamers</NavLink></li>
      </ul>
    </section>
        <section className='todos-los-productos col-xl-9 col-lg-9 col-md-12'>
        {product.map(productslista=>(
        <article key={productslista.id} className='border rounded  contenedor-productos'>
            <img src={productslista.image} className='img-productos'/>
            <div className="conteiner-cards">
                <div>
                    <p className="nombre-producto">{productslista.title}</p>
                </div>
                <p className="dis-producto"> Disponibles: {productslista.stock}</p>
				<h3  className="precio-producto">${productslista.price}</h3>
                <p className="dis-producto">Sin Interés 6x</p>
                <p className="dis-producto">Efectivo -20%</p>
				<p className="nombre-producto">{productslista.categoryid}</p>
                <div className="conteiner-button">
                    <Link to={`/item/${productslista.id}`}>
                        <button type="button" className="btn btn-primary" >
                            <img src="https://i.imgur.com/Km3Td7U.png" alt="foto-de-un-ojo"/>
                        </button>
				    </Link>
                </div>
			</div>
        </article>
        ))}
        </section>
        </main>
    )
} 
export default ItemListContainerCategory