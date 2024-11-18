import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Validate = (props) => {
    const { errors } = props;
    const renderErrors = () => {
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).map((key, index) => {
                toast.error(errors[key])
            });
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