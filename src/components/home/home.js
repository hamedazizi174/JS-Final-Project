import El from "@/utils/El/El";
import Header from "./header/header";
import Search from "./search/search";
import Brands from "./brands/brands";
import MostPopular from "../shared/mostPopular/mostPopular";
import Products from "../shared/products/products";

export default function Home() {
  return El({
    element: "div",
    className: "px-6",
    children: [
      Header(),
      Search(),
      Brands(),
      MostPopular(),
      Products("products"),
    ],
  });
}
