import React from 'react';
import { useParams } from 'react-router-dom';

import {useState,useEffect} from 'react'



function Individual_page() {


    const { id } = useParams();

    console.log(id)

    const [product , setProduct] = useState([])
  const [loading , setLoading] = useState(false);

 

  useEffect(() => {
    const getProducts = async () => {
        setLoading(true)
        const response =  await fetch(`https://mintoab-project.herokuapp.com/data/${id}`)
        setProduct(await response.json())
        setLoading(false)
         console.log(product);
    }
    getProducts()
},[] )


  return (
    <div>{product.topic_name}</div>
    
  )
}

export default Individual_page