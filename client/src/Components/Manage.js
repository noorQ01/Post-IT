import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../Features/ManageUserSlice";
import * as ENV from "../config";
import { Button } from "reactstrap";
import ManageProfile from "./ManageProfile";
const Manage = () => {
  const user = useSelector((state) => state.users.user);
  const allUsers = useSelector((state) => state.manageUsers.allUsers);

  const picURL = ENV.SERVER_URL + "/uploads/";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    navigate("/manage");
  };

  const handleUpdate = (id) => {
    navigate("/manageProfile/" + id);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getUsers());
    }
  }, [user]);
  return (
    <div>
      <h4>Manage Users</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.email}>
              <td>
                <img src={picURL + user.profilePic} className="userImage" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.userType}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this user?"
                      )
                    ) {
                      handleDelete(user._id);
                    }
                  }}
                >
                  Delete
                </Button>
              </td>
              <td>
                <Button onClick={() => handleUpdate(user._id)}>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manage;
