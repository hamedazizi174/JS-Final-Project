import El from "@/utils/El/El";
import MostPopular from "../shared/mostPopular/mostPopular";
import Products from "../shared/products/products";
import HomeHeader from "../shared/homeHeader/homeHeader";

const src = "http://localhost:5173/src/assets/images/search.svg";

export default function Wishlist() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [
      HomeHeader(
        "My Wishlist",
        El({ element: "img", className: "fixed right-6", src })
      ),
      MostPopular(),
      Products("products"),
    ],
  });
}
