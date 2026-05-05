import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="layout">
      <Sidebar collapsed={isSidebarCollapsed} />

      <div className="main">
        <Navbar toggle={toggleSidebar} />

        <div className="page">
          {children}
        </div>
      </div>
    </div>
  );
}