import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserTable from "../features/users/components/UserTable";
import UserModal from "../features/users/components/UserModal";
import UserViewModal from "../features/users/components/UserViewModal";
import Button from "../Shared/ui/Button";
import Input from "../Shared/ui/Input";
import Loader from "../Shared/ui/Loader";

export default function Users() {
  const location = useLocation();

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userToEdit, setUserToEdit] = useState(null);

  const [userToView, setUserToView] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.state?.openModal) {
      setIsModalOpen(false);
    }
  }, [location.state]);

 
  if (isPageLoading) {
    return <Loader message="Please wait..." />;
  }

 
  const handleAddUserClick = () => {
    setUserToEdit(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>Users</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
        <Button variant="primary" onClick={handleAddUserClick}>
          Add User
        </Button>

        <div style={{ width: "250px" }}>
          <Input
            placeholder="Search by name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onClear={() => setSearchText("")}
          />
        </div>
      </div>

      <UserTable
        search={searchText}
        onEdit={(user) => {
          setUserToEdit(user);
          setIsModalOpen(true);
        }}
        onView={(user) => setUserToView(user)}
      />

      {isModalOpen && (
        <UserModal
          close={() => setIsModalOpen(false)}
          editData={userToEdit}
        />
      )}

      {userToView && (
        <UserViewModal
          user={userToView}
          close={() => setUserToView(null)}
        />
      )}
    </div>
  );
}