import axios from "../utils/axiosCustomize";
const postCreateNewUser = (inputs, image) => {
    const data = new FormData();
    data.append('email', inputs.email);
    data.append('password', inputs.password);
    data.append('username', inputs.username);
    data.append('role', inputs.role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
};

export { postCreateNewUser };