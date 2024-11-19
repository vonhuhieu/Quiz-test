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

const getUserWithPaginate = (page, limit) => {
    return axios.get(`http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
    return axios.post(`http://localhost:8081/api/v1/login`, { email: email, password: password, delay: 3000 });
};

// cách viết khác
// const postLogin = (email, password) => {
//     return axios.post(`http://localhost:8081/api/v1/login`, { email, password });
// };

const postRegister = (email, username, password) => {
    return axios.post(`http://localhost:8081/api/v1/register`, {email: email, username: username, password: password});
};
export { postCreateNewUser, getAllUsers, putUpdateNewUser, deleteUser, getUserWithPaginate, postLogin, postRegister };