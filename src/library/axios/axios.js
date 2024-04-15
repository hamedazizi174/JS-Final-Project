import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getData(endPoint) {
  const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
  return data;
}

export async function postData(endPoint, data) {
  await axios.post(`${postData}/${endPoint}`, data);
}
