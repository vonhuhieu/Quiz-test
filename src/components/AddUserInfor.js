import React from "react";
import { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Hoi Dan IT',
//         age: ''
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         // bad code
//         // this.state.age = event.target.value
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age,
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />

//                     <label>Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

let userID = 0;
const AddUserInfor = (props) => {
    const [newUser, setNewUser] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: ++userID,
            name: newUser.name,
            age: newUser.age,
        });
    };
    return (
        <>
            <div>Name User: {newUser.name}</div>
            <div>Age User: {newUser.age}</div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <label>Name User:</label>
                <input
                    value={newUser.name}
                    type="text"
                    name="name"
                    onChange={(event) => { handleInput(event) }}
                />
                <label>Age User:</label>
                <input
                    value={newUser.age}
                    type="text"
                    name="age"
                    onChange={(event) => { handleInput(event) }}
                />
                <button>Submit</button>
            </form>
        </>
    );
}

export default AddUserInfor;