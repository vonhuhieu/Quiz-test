import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";
import { toast } from "react-toastify";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  // đóng mở modal create
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  // đóng mở modal update
  const [updateUser, setUpdateUser] = useState({});
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const handleShowModalUpdateUser = (user) => {
    console.log("check user", user);
    setShowModalUpdateUser(true);
    setUpdateUser(user);
  };

  const resetUpdateData = () => {
    setUpdateUser({});
  };


  // cập nhật list user
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let response = await getAllUsers();
    if (response && response.EC === 0) {
      setListUsers(response.DT);
    }
    else if (response && response.EC !== 0) {
      toast.error(response.EM);
    }
    else {
      toast.error("No response data from server");
    }
  };

  // cách này dùng nếu muốn không phải gọi đến api quá nhiều
  const handleListUsers = (newUser) => {
    setListUsers([newUser, ...listUsers]);
  };
  return (
    <div className="manage-user-container">
      <div className="title">
        Manage Users
      </div>
      <div className="users-content">
        <div className="btn-add-new">
          <button onClick={() => { handleShow() }} className="btn btn-primary">
            <FcPlus />Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleShowModalUpdateUser={handleShowModalUpdateUser}
          />
        </div>
        <ModalCreateUser
          show={show}
          setShow={setShow}
          handleListUsers={handleListUsers}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          updateUser={updateUser}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
      </div>
    </div>
  );
};

export default ManageUser;