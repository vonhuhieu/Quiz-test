import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg'

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    };
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers);
        // props => viết tắt properties
        return (
            <div className="display-infor-container">
                <img src={logo}/>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser == true ? "hide" : "show"} list users</span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((value, key) => {
                            return (
                                <div key={value.id} className={parseInt(value.age) > 18 ? "pink" : "green"}>
                                    <div>User's ID: {value.id}</div>
                                    <div>User's Name: {value.name}</div>
                                    <div>User's Age: {value.age}</div>
                                    <br />
                                </div>
                            );
                        })}
                    </>
                }
            </div>
        );
    }
}
export default DisplayInfor;