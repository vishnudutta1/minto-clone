import { useState, useEffect } from 'react';

import axios from "axios"

import './Product.css';

import '../App.css';

import { NavLink } from 'react-router-dom';


function Product() {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search,setSearch] = useState("")




  const fetchData = async () => {
    return axios({
      url: `https://mintoab-project.herokuapp.com/data`,
      method: 'GET',
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        console.log(response.data)
        setData(response.data)
       // dispatch(storeData(response.data));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);


 

 


  return (
    <div className="App">





      <div className="dataDisplay" >


{data
.filter((a) => {
  if(search === ""){
    return a
  }else{
    return a.author_name.toLowerCase().includes(search.toLowerCase())  || a.topic_name.toLowerCase().includes(search.toLowerCase())  
  }
  
})
 
.map((e) => {
  return (

    

      

<NavLink to={`/products/${e.id}`} className="navMapping"  >

<div  key = {e.id} className='content'>
      <div className='innerContent'>
      <img src={e.author_image[0]} alt=""  />
      <div>
      <h1 className='topic_name'>{e.topic_name}</h1>
    <h1 className='author_name'>{e.author_name}</h1>
      </div>
      </div>
      </div>

  </NavLink>

      
    
    
    
  )
 
})}
      </div>
    </div>
  );
}

export default Product;
