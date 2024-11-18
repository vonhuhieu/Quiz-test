import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import Validate from '../../Validate/Validate';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';
import { putUpdateNewUser } from '../../../services/apiServices';

const ModalUpdateUser = (props) => {
    const { show, setShow, updateUser } = props;
    const handleClose = () => {
        setShow(false);
        setInputs({
            email: "",
            username: "",
            role: "",
            id: '',
        });
        setPreviewImage("");
        setImage("");
        setErrors({});
        props.resetUpdateData();
    };
    // các input bình thường
    const [inputs, setInputs] = useState({
        email: '',
        username: '',
        role: '',
        id: '',
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errorsSubmit = {};
        let check_validate = true; 
        if (inputs.username === "") {
            check_validate = false;
            errorsSubmit.username = "Username must not be empty";
        }
        if (inputs.role === "") {
            check_validate = false;
            errorsSubmit.role = "Role must not be empty";
        }
        setErrors(errorsSubmit);
        if (check_validate == true) {
            let data = await putUpdateNewUser(inputs, image);
            console.log("component response:", data);
            if (data && data.EC === 0) {
                // props.handleListUsers(data.DT);
                // await props.fetchListUsers();
                await props.fetchListUsersWithPaginate(props.currentPage);
                props.setCurrentPage(props.currentPage);
                toast.success(data.EM);
                handleClose();
            }
            else if (data && data.EC !== 0) {
                toast.error(data.EM);
            }
            else {
                toast.error("No response from server");
            }
        }
    };

    // Update
    useEffect(() => {
        if (!_.isEmpty(updateUser)) {
            // update state
            setInputs({
                email: updateUser.email,
                username: updateUser.username,
                role: updateUser.role,
                id: updateUser.id,
            });
            if (updateUser.image) {
                setPreviewImage(`data:image/jpeg;base64,${updateUser.image}`);
            }
            else
            {
                setPreviewImage("");
            }
            setImage("");
        }
    }, [updateUser]);
    return (
        <>
            <Modal show={show} onHide={() => { handleClose() }} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Validate errors={errors} />
                    <form className="row g-3" encType='multipart/form-data' >
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" name='email' value={inputs.email} disabled className="form-control" onChange={(event) => { handleInput(event) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" name='password' value={inputs.password} disabled className="form-control" onChange={(event) => { handleInput(event) }} />
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
                    <Button type='submit' variant="primary" onClick={(event) => { handleSubmit(event) }} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;