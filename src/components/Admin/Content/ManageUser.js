import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
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
          <TableUser/>
        </div>
        <ModalCreateUser show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default ManageUser;