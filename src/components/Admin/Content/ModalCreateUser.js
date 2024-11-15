import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import Validate from '../../Validate/Validate';
import axios from 'axios';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    const handleClose = () => {
        setShow(false);
        setInputs({
            email: "",
            password: "",
            username: "",
            role: "",
        });
        setPreviewImage("");
        setImage("");
    };
    // các input bình thường
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        username: '',
        role: '',
    });

    // input là file
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs, [name]: value,
        }));
    };

    // Validate
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        let errorsSubmit = {};
        let check_validate = true;
        if(inputs.email === "" || !validateEmail(inputs.email))
        {
            check_validate = false;
            errorsSubmit.email = "Invalid Email";
        }
        if(inputs.password === "")
        {
            check_validate = false;
            errorsSubmit.password = "Password must not be empty";
        }
        if(inputs.username === "")
        {
            check_validate = false;
            errorsSubmit.username = "Username must not be empty";
        }
        if(inputs.role === "")
        {
            check_validate = false;
            errorsSubmit.role = "Role must not be empty";
        }
        setErrors(errorsSubmit);
        if(check_validate == true)
        {
            const data = new FormData();
            data.append('email', inputs.email);
            data.append('password', inputs.password);
            data.append('username', inputs.username);
            data.append('role', inputs.role);
            data.append('userImage', image);
            let response = await axios.post('http://localhost:8081/api/v1/participant', data);
            console.log("check res:", response);
        }
    };
    return (
        <>
            <Modal show={show} onHide={() => { handleClose() }} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Validate errors={errors}/>
                    <form className="row g-3" encType='multipart/form-data' >
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" name='email' value={inputs.email} className="form-control" onChange={(event) => { handleInput(event) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" name='password' value={inputs.password} className="form-control" onChange={(event) => { handleInput(event) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" name='username' value={inputs.username} className="form-control" onChange={(event) => { handleInput(event) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select name='role' className="form-select" value={inputs.role} onChange={(event) => { handleInput(event) }}>
                                <option value="">Please choose your role</option>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus />Upload File Image</label>
                            <input type="file" hidden id='labelUpload' onChange={(event) => { handleUploadImage(event) }} />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleClose() }}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={(event) => {handleSubmit(event)}} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;