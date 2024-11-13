import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Hoi Dan IT", age: "16" },
//             { id: 2, name: "Eric", age: "26" },
//             { id: 3, name: "HaryPhamDev", age: "69" },
//         ]
//     };

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     };

//     handleDeleteUser = (userID) => {
//         this.setState({
//             listUsers: this.state.listUsers.filter((user) => {
//                 return user.id !== userID
//             }),
//         })
//     };
//     // JSX
//     render() {
//         // DRY: don't repeat yourself
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /><br />
//                     <DisplayInfor
//                         handleDeleteUser={this.handleDeleteUser}
//                         listUsers={this.state.listUsers}
//                     />
//                     <hr />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([]);

    const handleAddNewUser = (newUser) => {
        setListUsers([newUser, ...listUsers]);
    };

    const handleDeleteUser = (userID) => {
        setListUsers(listUsers.filter((user) => {
            return user.id !== userID;
        }));
    };
    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser}/>
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser}/>
        </>
    );
};

export default MyComponent;