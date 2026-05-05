import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-hero">
      <h1 className="home-title">
        Welcome to Redux CRUD Dashboard
      </h1>

      <p className="home-subtitle">
        Manage your users easily — add, edit, view, and delete.
      </p>

      <div className="home-actions">
        
        <button
          className="home-button"
          onClick={() => navigate("/users")}
        >
          View Users
        </button>
      </div>
    </div>
  );
}