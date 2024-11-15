import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({[name]: value, ...inputs});
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

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3" encType='multipart/form-data'  onSubmit={(event) => {handleSubmit(event)}}>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name='email' className="form-control" onChange={(event) => {handleInput(event)}}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" name='password' className="form-control" onChange={(event) => {handleInput(event)}}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" name='username' className="form-control" onChange={(event) => {handleInput(event)}}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select name='role' className="form-select" onChange={(event) => {handleInput(event)}}>
                <option selected value="">Please choose your role</option>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label">Image</label>
              <input type="file" className="form-control" />
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