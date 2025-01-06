import './App.css'
import AdminIndex from './Pages/Admin/AdminIndex'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>

        <Route path='/*' element={<AdminIndex />} />
      </Routes>
    </>
  )
}

export default App
