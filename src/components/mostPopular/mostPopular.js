import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import MostPopular from "../shared/mostPopular/mostPopular";
import Products from "../shared/products/products";

export default function MostPopularPage() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [HomeHeader("Most Popular"), MostPopular(), Products("products")],
    eventListener: [
      {
        event: "click",
        callback: (event) => {
          event.currentTarget.lastChild.remove();
          const el = event.target.innerText.toUpperCase();
          const elem = { brand: el };
          event.currentTarget.append(Products(elem));
        },
      },
    ],
  });
}
