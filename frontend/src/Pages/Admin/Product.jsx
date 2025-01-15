import axios from 'axios';
import { useState, useEffect } from 'react';
import './Product.css';
import {useNavigate} from 'react-router-dom';

const Product = () => {
  const navigate= useNavigate();
  const [pData, setPdata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState('');

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

  const deleteFn = async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/product/deleteProduct/${id}`)
      console.log("successfully deleted.");
      setResult("successfully deleted the product.");
      setPdata(pData.filter(product=>product._id!== id));
    }catch(e){
      console.error("error: ",e.message);
      setResult("Failed to delete the product.");
    }
  }
  useEffect(()=>{
    if(result){
      const timer = setTimeout(()=>{
        setResult('');
      },3000)
      return()=>clearTimeout(timer);
    }
  },[result])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }
  const handleEditClick=(id)=>{
    navigate(`/editProduct/${id}`)
  }

  return (
    <>
      <div className="mainCard">
        <table border="1" style={{borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <th>Product names</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pData.length > 0 ? pData.map((product) => (<tr key={product._id}>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>Nrs.{product.price}</td>
              <td>{product.quantity}</td>
              <td className="btn1">
                <button type="button" onClick={()=>handleEditClick(product._id)}>Edit</button>
                <button type="button" onClick={()=>deleteFn(product._id)}>Delete</button>
              </td>
            </tr>
            )) : (<h1>no product to displayed</h1>)}
          </tbody>
        </table>
        {result && <p>Message:  {result}</p>}

      </div>
    </>

  )
}

export default Product;

