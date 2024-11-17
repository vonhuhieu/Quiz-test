import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
    //   const [show, setShow] = useState(false);
    const { show, setShow, updateUser } = props;
    const userID = updateUser.id;
    const handleClose = () => {
        setShow(false);
        props.resetUpdateData();
    };
    const handleDeleteUser = async () => {
        let data = await deleteUser(userID);
        if (data && data.EC === 0) {
            // props.handleListUsers(data.DT);
            await props.fetchListUsers();
            toast.success(data.EM);
            handleClose();
        }
        else if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
        else {
            toast.error("No response from server");
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user whose email = <b>{updateUser.email}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;