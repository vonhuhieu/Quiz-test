import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3" encType='multipart/form-data' onSubmit={(event) => { handleSubmit(event) }}>
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
                        <div className="col-md-4">
                            <button type='submit' name='submit'>Confirm</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleClose} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;