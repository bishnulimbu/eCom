import {useState, useEffect} from 'react'
import './AddProduct.css'
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(false);
  const [error,setError] = useState('');


  const addFn= async(e) =>{
    e.preventDefault();
    try{
      console.log("data sent",{
       productName:name,
        category:category,
        price:price,
        quantity:quantity
      });
      const response = await axios.post('http://localhost:8080/product/addProduct',{
       productName:name,
        category:category,
        price:price,
        quantity:quantity
      });
       console.log(response);
      setResult(true);
      setName('');
      setCategory('');
      setPrice('');
      setQuantity('');
    }catch(e){
      setError(e.message);
      console.error("couldn't add data.",e);
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
    <form className="mainForm" action="" onSubmit={addFn}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} required />

      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required />

      <button type="submit" >Submit</button>
      {result && <p>data added successfully.</p>}
      {error && <p>{error}</p>}
    </form>

  )
}
    

    export default AddProduct
