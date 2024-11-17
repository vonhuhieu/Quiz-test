const TableUser = (props) => {
    const { listUsers } = props;
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
                                <button className="btn btn-secondary button-view" onClick={() => {props.handleShowModalViewUser(value)}}>View</button>
                                <button className="btn btn-warning button-update" onClick={() => {props.handleShowModalUpdateUser(value)}}>Update</button>
                                <button className="btn btn-danger button-delete">Delete</button>
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
        </>
    );
};

export default TableUser;