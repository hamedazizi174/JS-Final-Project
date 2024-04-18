import El from "@/utils/El/El";
import CartHeader from "./cartHeader/cartHeader";
import nav from "@/layout/nav/nav";
import CartPrice from "./cartPrice/cartPrice";

export default function Cart() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [CartHeader("My Cart"), CartPrice(), nav()],
  });
}
