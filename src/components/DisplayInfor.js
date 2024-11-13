import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg'

const DisplayInfor = (props) => {
    // xử lý listUsers
    const { listUsers } = props;
    const renderListUsers = () => {
        if (listUsers.length > 0) {
            return listUsers.map((value, key) => {
                return (
                    <div key={value.id} className={parseInt(value.age) >= 30 ? "red" : "green"}>
                        <div>ID User: {value.id}</div>
                        <div>Name User: {value.name}</div>
                        <div>Age User: {value.age}</div>
                        <button onClick={() => { props.handleDeleteUser(value.id) }}>Delete</button>
                        <hr />
                    </div>
                );
            });
        }
    };

    // xử lý button
    const [showButton, setShowButton] = useState(true);
    const handleShowButton = () => {
        setShowButton(!showButton);
    };

    console.log("call me render");

    useEffect(
        () => {
            if (listUsers.length == 0) {
                alert("You deleted all users");
            }
            console.log("call me useEffect");
        }, [listUsers]
    );

    return (
        <div className="display-infor-container">
            <button onClick={() => { handleShowButton() }}>{showButton == true ? "Hide list users" : "Show list users"}</button>
            <br /><br />
            {showButton == true && renderListUsers()}
        </div>
    );
};
export default DisplayInfor;