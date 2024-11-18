import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";
import { toast } from "react-toastify";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { getUserWithPaginate } from "../../../services/apiServices";
import { set } from "lodash";

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

  // đóng mở modal view
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const handleShowModalViewUser = (user) => {
    setShowModalViewUser(true);
    setUpdateUser(user);
  };

  // limit User in a paginate
  const LIMIT_USER = 1;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const resetUpdateData = () => {
    setUpdateUser({});
  };

  // đóng mở modal delete
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const handleShowModalDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setUpdateUser(user);
  };


  // cập nhật list user
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
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

  const fetchListUsersWithPaginate = async (page) => {
    let response = await getUserWithPaginate(page, LIMIT_USER);
    if (response && response.EC === 0) {
      console.log('check res: ', response.DT);
      setListUsers(response.DT.users);
      setPageCount(response.DT.totalPages);
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
          {/* <TableUser
            listUsers={listUsers}
            handleShowModalUpdateUser={handleShowModalUpdateUser}
            handleShowModalViewUser={handleShowModalViewUser}
            handleShowModalDeleteUser={handleShowModalDeleteUser}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleShowModalUpdateUser={handleShowModalUpdateUser}
            handleShowModalViewUser={handleShowModalViewUser}
            handleShowModalDeleteUser={handleShowModalDeleteUser}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalCreateUser
          show={show}
          setShow={setShow}
          handleListUsers={handleListUsers}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          updateUser={updateUser}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          updateUser={updateUser}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          updateUser={updateUser}
          resetUpdateData={resetUpdateData}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;