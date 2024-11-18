import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount } = props;
    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(parseInt(event.selected) + 1);
        props.setCurrentPage(parseInt(event.selected) + 1);
        console.log(
            `User requested page number ${event.selected}`
        );
    };

    const renderListUsers = () => {
        if (listUsers.length > 0) {
            return listUsers.map((value, key) => {
                return (
                    <tr key={`table-users-${value.id}`}>
                        <td>{value.id}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.role}</td>
                        <td className="table-users-button">
                            <button className="btn btn-secondary button-view" onClick={() => { props.handleShowModalViewUser(value) }}>View</button>
                            <button className="btn btn-warning button-update" onClick={() => { props.handleShowModalUpdateUser(value) }}>Update</button>
                            <button className="btn btn-danger button-delete" onClick={() => { props.handleShowModalDeleteUser(value) }}>Delete</button>
                        </td>
                    </tr>
                );
            });
        }
        else {
            return (
                <>
                    <tr>
                        <td>No data found</td>
                    </tr>
                </>
            );
        }
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderListUsers()}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                disabledClassName="disabled"
                forcePage={props.currentPage - 1}
            />
        </>
    );
};

export default TableUserPaginate;