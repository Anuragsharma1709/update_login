import axios from "axios";

const basePath = "http://localhost:3001"

const getUsers = async () => (await axios.get(`${basePath}/users`)).data

const addUser = async (data) => (await axios.post(`${basePath}/users`, data))

export { getUsers, addUser }