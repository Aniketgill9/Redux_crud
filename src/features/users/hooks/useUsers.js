import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUser,
  deleteUser,
} from "../../../Redux/userSlice";

export const useUsers = () => {
  
  const users = useSelector((state) => state.users.users);

  
  const dispatch = useDispatch();

  
  const add = (userData) => {
    dispatch(addUser(userData));
  };

  const update = (userData) => {
    dispatch(updateUser(userData));
  };

  const remove = (userId) => {
    dispatch(deleteUser(userId));
  };

  return {
    users,
    add,
    update,
    remove,
  };
};