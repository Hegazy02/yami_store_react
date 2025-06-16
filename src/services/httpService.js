import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export const get = axiosInstance.get.bind(axiosInstance);
export const post = axiosInstance.post.bind(axiosInstance);
export const put = axiosInstance.put.bind(axiosInstance);
export const del = axiosInstance.delete.bind(axiosInstance);
