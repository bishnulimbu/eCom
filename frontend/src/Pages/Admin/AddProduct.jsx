import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
  return (
    <form className="mainForm" action="">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" required />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" required />

      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" required />

      <button type="submit">Submit</button>
    </form>

  )
}

export default AddProduct
