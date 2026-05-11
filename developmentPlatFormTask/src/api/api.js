// src/api/axios.js

import axios from "axios";

const api = axios.create({
  baseURL: " https://devplat.heraldcollege.edu.np/leave-management/api",
});

export default api;