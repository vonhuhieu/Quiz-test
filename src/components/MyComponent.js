import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers:[
            {id: 1, name: "Hoi Dan IT", age: "30"},
            {id: 2, name: "Eric", age: "26"},
            {id: 3, name: "HaryPhamDev", age: "69"},
        ]
    };
    // JSX
    render() {
        // DRY: don't repeat yourself
        return (
            <div>
                <UserInfor/>
                <br/><br/>
                <DisplayInfor listUsers={this.state.listUsers}/>
                <hr/>
                
            </div>
        );
    }
}

export default MyComponent;