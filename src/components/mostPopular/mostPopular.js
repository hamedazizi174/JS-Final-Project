import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import MostPopular from "../shared/mostPopular/mostPopular";
import Products from "../shared/products/products";

export default function MostPopularPage() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [HomeHeader(), MostPopular(), Products("products")],
  });
}
