import axios from 'axios';
import { useState, useEffect } from 'react';
import './Product.css';

const Product = () => {
  const [pData, setPdata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/product/allProduct');
        setPdata(response.data.data);

      } catch (e) {
        setError(`error is ${e}`);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <div className="mainCard">
        {pData.length > 0 ? pData.map((product) => (<div className='productCard' key={product._id} >
          <p>Name: {product.productName}</p>
          <p>Category: {product.category}</p>
          <p>Price: Nrs.{product.price}</p>
          <p>Quantity: {product.Quantity}</p>
        </div>)) : (<h1>no product to displayed.</h1>)}
      </div>
    </>

  )
}

export default Product;

