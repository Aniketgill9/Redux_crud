export default function Navbar({ toggle }) {
  return (
    <div className="navbar">
      
      <span className="menu-icon" onClick={toggle}>
        ☰
      </span>

     
      <span className="nav-title">
        Redux CRUD Dashboard
      </span>
    </div>
  );
}