import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.19:9000/api/",
});

export default apiClient;
