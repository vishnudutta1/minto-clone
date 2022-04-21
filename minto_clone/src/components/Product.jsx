import { useState, useEffect } from 'react';

import axios from "axios"

import '../App.css';

function Product() {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  const fetchData = async () => {
    return axios({
      url: `http://localhost:8000/data`,
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
{data.map((e) => {
  return (

    <div key = {e.id}>
      
      {/* <h1>{e._id}</h1> */}
    <img src={e.author_image[0]} alt=""  />
    <h1>{e.author_name}</h1>
    </div>
  )
})}
     
    </div>
  );
}

export default Product;
