import './App.css'
import AdminIndex from './Pages/Admin/AdminIndex'
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/Admin/Product';
import DashBoard from './Pages/Admin/DashBoard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AdminIndex />} >
          <Route path='/product' element={<Product />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
