import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
  const links = [
    { lName: "Dashboard", address: "/dashboard" },
    { lName: "View Products", address: "/product" },
    { lName: "Add Product", address: "/addProduct" },
    { lName: "User Details", address: "/user" },
  ];
  return (
    <div className="link-list">
      <ul>
        {links.map((val, index) => (
          <li key={index}>
            <Link to={val.address}>{val.lName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar


