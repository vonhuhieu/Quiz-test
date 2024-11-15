const Validate = (props) => {
    const { errors } = props; 
    const renderErrors = () => {
        if(Object.keys(errors).length > 0)
        {
            return (
                <>
                    <li>{errors.email}</li>
                    <li>{errors.password}</li>
                    <li>{errors.username}</li>
                    <li>{errors.role}</li>
                </>
            );
        }
    };
    return (
        <>
            <div>{renderErrors()}</div>
        </>
    );
};

export default Validate;