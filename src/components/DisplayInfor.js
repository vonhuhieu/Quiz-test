import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        // props => viết tắt properties
        return listUsers.map((value, key) => {
            return (
                <div key={value.id}>
                    <div>User's ID: {value.id}</div>
                    <div>User's Name: {value.name}</div>
                    <div>User's Age: {value.age}</div>
                    <br />
                </div>
            );
        });
    }
}
export default DisplayInfor;