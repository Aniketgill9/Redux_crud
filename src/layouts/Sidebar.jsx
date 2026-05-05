import { Link } from "react-router-dom";

export default function Sidebar({ collapsed }) {
 
  const sidebarClass = collapsed ? "sidebar collapsed" : "sidebar";

  return (
    <div className={sidebarClass}>
      
      <h2 className="logo">
        {collapsed ? "|||" : "Dashboard"}
      </h2>

      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}