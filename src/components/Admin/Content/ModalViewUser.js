import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

const ModalViewUser = (props) => {
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
    const [previewImage, setPreviewImage] = useState("");

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs, [name]: value,
        }));
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
        }
    }, [updateUser]);
    return (
        <>
            <Modal show={show} onHide={() => { handleClose() }} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>View user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <input type="text" name='username' value={inputs.username} disabled className="form-control" onChange={(event) => { handleInput(event) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select name='role' className="form-select" value={inputs.role} disabled onChange={(event) => { handleInput(event) }}>
                                <option value="">Please choose your role</option>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
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
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ModalViewUser;