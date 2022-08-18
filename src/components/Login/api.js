import axios from "axios";

const basePath = "http://localhost:3001"

const getUsers = async () => (await axios.get(`${basePath}/users`)).data

export { getUsers }