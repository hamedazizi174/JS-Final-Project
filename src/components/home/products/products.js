import { getData } from "@/library/axios/axios";
import El from "@/utils/El/El";

export default function Products() {
  const products = getData("products");
  console.log(products);
  return El({
    element: "div",
    className: "grid grid-col-2 gap-x-4 gap-y-6",
    children: [],
  });
}
