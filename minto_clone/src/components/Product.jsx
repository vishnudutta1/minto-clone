import { useState, useEffect } from 'react';

import axios from "axios"

import '../App.css';

function Product() {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);




  const fetchData = async () => {
    setLoading(true);
    return axios({
      url: 'http://localhost:8000/data',
      method: 'GET',
      params: {
       
      
      },
    })
      .then((response) => {
        setLoading(false);
        // const data =(response.data)
        //const newdata = response.data
        console.log(response.data)
       setData(response.data);
        
      })

      .catch((error) => {
        setLoading(true);
        setError(true);
      });
  };

  useEffect(() => {
    fetchData();
  
  }, []);


  return (
    <div className="App">
{data.map((e) => {
  return (
    <div>
      <h1>{e.id}</h1>
    <img src={e.image} alt="" className='imgcls' />
    </div>
  )
})}
     
    </div>
  );
}

export default Product;
