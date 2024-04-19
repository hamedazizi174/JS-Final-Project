import Product from "@/components/shared/product/product";
import { getCart } from "@/library/axios/axios";
import El from "@/utils/El/El";

export default function CartItems() {
  const elem = El({
    element: "div",
    id: "elem",
    className: "pt-20 pb-40",
    children: [],
  });
  getCart().then((res) => {
    res.forEach((item) => {
      elem.append(Product(item.name, item.imageURL, item.price, item.id));
    });
  });
  return elem;
}
