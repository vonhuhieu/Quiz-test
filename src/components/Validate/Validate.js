import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Validate = (props) => {
    const { errors } = props;
    const renderErrors = () => {
        if (Object.keys(errors).length > 0) {
            toast.error(errors.email)
            toast.error(errors.password)
            toast.error(errors.username)
            toast.error(errors.role)
        }
    };

    useEffect(() => {
        renderErrors()
    }, [errors]);
    return (
        <>
        
        </>
    );
};

export default Validate;