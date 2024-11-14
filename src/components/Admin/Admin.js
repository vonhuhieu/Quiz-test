import SideBar from "./SideBar";
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from "react";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars onClick={() => {handleCollapsed()}}/>
                content go here
            </div>
        </div>
    );
};

export default Admin;
