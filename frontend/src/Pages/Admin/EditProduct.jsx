import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const {id} = useParams();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(false);
  const [error,setError] = useState('');
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response = await axios.get(`http://localhost:8080/product/getProduct/${id}`);
        const product = response.data;
        setName(product.productName);
        setCategory(product.category);
        setPrice(product.price);
        setQuantity(product.quantity);
      } catch(e){
        setError('error fetching data');
        console.error("error:", e)
      }
    };
    fetchData();
  },[id]);


  const handleSubmit= async(e) =>{
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/product/editProduct/${id}`,{
        productName:name,
        price,
        quantity,
        category,
      });
      setResult(true);
    }catch(e){
      setError('error');
      console.error("couldn't update data",e)
    }
  }
  useEffect(()=>{
    if(result || error){
      const timer = setTimeout(()=>{
        setError('');
        setResult(false);
      },3000)
      return()=>clearTimeout(timer);
    }
  },[result,error])

  return (
    <form className="mainForm" action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} required />

      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required />

      <button type="submit" >Submit</button>
      {result && <p>data updated successfully.</p>}
      {error && <p>{error}</p>}
    </form>

  )
}


export default EditProduct 
