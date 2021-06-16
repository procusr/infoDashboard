import axios from "axios";


const baseUrl = "http://localhost:4000/users";

const getAllStatus = () => {
   return axios.get(baseUrl).then((response) => response.data);
};

const updateStatus = (id, obj) => {
      const request = axios.put(`${baseUrl}/${id}`, obj)
        return request.then(response => response.data)
}

export default {
    updateStatus,
    getAllStatus,
};
