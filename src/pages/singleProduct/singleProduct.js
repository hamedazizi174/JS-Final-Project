import SingleProduct from "@/components/singleProduct/singleProduct";
import { getDataById } from "@/library/axios/axios";
import El from "@/utils/El/El";

export default function singleProductPage(data) {
  const productId = data.id;
  const cart = El({
    element: "div",
    id: "product",
    children: [],
  });
  getDataById(productId).then((product) => {
    cart.append(SingleProduct(product));
  });
  return cart;
}
