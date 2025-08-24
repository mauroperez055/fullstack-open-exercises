import axios from 'axios';

const baseUrl = 'http://localhost:3002/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 1000,
    name: 'this person is not saved to server',
    number: '0000000'
  }
  return request.then(response => response.data.concat(nonExisting));
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, update, remove };