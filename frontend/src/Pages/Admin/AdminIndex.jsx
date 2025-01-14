import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./Product";
import DashBoard from "./DashBoard";
import './AdminIndex.css'
import AddProduct from "./AddProduct";

const AdminIndex = () => {


  return (
    <>
<div className="hover-area"></div>
<div className="admin-header">
  <Header />
</div>
      <div className="admin-sidebar"><SideBar />
        <div className="admin-content">          <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        </div>

      </div>
    </>
  );
};

export default AdminIndex;
