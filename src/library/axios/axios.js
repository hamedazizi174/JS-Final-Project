import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getData(endPoint) {
  const { data } = await axios.get(`${BASE_URL}/${endPoint}`);
  return data;
}

export async function getDataByBrand(brand) {
  const { data } = await axios.get(
    `${BASE_URL}/products?brand=${brand.toUpperCase()}`
  );
  return data;
}

// export async function postData(endPoint, data) {
//   await axios.post(`${postData}/${endPoint}`, data);
// }

export async function patchData(Data) {
  const { data } = await axios.get(`${BASE_URL}/users/1`);
  const cart = data.cart.concat(Data);
  await axios.patch(`${BASE_URL}/users/1`, { cart });
}

export async function getDataById(id) {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  return data;
}

export async function getCart() {
  const { data } = await axios.get(`${BASE_URL}/users/1`);
  return data.cart;
}
