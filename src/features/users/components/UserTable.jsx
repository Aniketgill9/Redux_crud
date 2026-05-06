

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useUsers } from "../hooks/useUsers";
import IconButton from "../../../Shared/ui/IconButton";
import { confirmDelete } from "../../../Shared/ui/Alert";

export default function UserTable({ onEdit, onView, search = "" }) {
  const { users, remove } = useUsers();

  
  const filteredUsers = users.filter((user) => {
    const name = user.name?.toLowerCase() || "";
    const email = user.email?.toLowerCase() || "";

    return (
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase())
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th className="users-table-empty">Actions</th>
        </tr>
      </thead>

      <tbody>
        {filteredUsers.length === 0 ? (
          <tr>
            <td colSpan="3" className="users-table-empty">
              No Users Found
            </td>
          </tr>
        ) : (
          filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td className="users-table-actions">
                <IconButton
                  icon={<FaEye />}
                  tooltip="View"
                  className="view"
                  onClick={() => onView(user)}
                />

                <IconButton
                  icon={<FaEdit />}
                  tooltip="Edit"
                  className="edit"
                  onClick={() => onEdit(user)}
                />

                <IconButton
                  icon={<FaTrash />}
                  tooltip="Delete"
                  className="delete"
                  onClick={() =>
                    confirmDelete(() => remove(user.id))
                  }
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}