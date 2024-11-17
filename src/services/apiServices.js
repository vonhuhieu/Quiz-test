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

const getAllUsers = () => {
    return axios.get(`http://localhost:8081/api/v1/participant/all`);
};

const putUpdateNewUser = (inputs, image) => {
    const data = new FormData();
    data.append('id', inputs.id);
    data.append('username', inputs.username);
    data.append('role', inputs.role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
};

const deleteUser = (userID) => {
    return axios.delete(`http://localhost:8081/api/v1/participant`, { data: { id: userID } });
};
export { postCreateNewUser, getAllUsers, putUpdateNewUser, deleteUser };