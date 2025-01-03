import Header from "../../Components/Header"
import SideBar from "../../Components/SideBar"
import { Outlet } from 'react-router-dom';

const AdminIndex = () => {
  return (
    <>
      <div className="admin-header">
        <Header />
        <div className="admin-sidebar">
          <SideBar />
          <main className="admin-main">
            <Outlet />
          </main >
        </div>
      </div>
    </>

  )
}

export default AdminIndex 
