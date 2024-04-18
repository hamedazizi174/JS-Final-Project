import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import Products from "../shared/products/products";
import { getData } from "@/library/axios/axios";

export default function BrandPage(data) {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [HomeHeader(data), Products(data)],
  });
}
