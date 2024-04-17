import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import Products from "../shared/products/products";

export default function BrandPage() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [HomeHeader(), Products("products")],
  });
}
