import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg'

// stateless vs staleful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('call me render');
//         // destructuring array/object
//         const { listUsers } = this.props;
//         // console.log(listUsers);
//         // props => viết tắt properties
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <>
//                         {listUsers.map((value, key) => {
//                             return (
//                                 <div key={value.id} className={parseInt(value.age) > 18 ? "red" : "green"}>
//                                     <div>User's ID: {value.id}</div>
//                                     <div>User's Name: {value.name}</div>
//                                     <div>User's Age: {value.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(value.id)}>Delete</button>
//                                     </div>
//                                     <br />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div className="display-infor-container">
            {true &&
                <>
                    {listUsers.map((value, key) => {
                        return (
                            <div key={value.id} className={parseInt(value.age) > 18 ? "red" : "green"}>
                                <div>User's ID: {value.id}</div>
                                <div>User's Name: {value.name}</div>
                                <div>User's Age: {value.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(value.id)}>Delete</button>
                                </div>
                                <br />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
};
export default DisplayInfor;