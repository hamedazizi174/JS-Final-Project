import El from "@/utils/El/El";
import CartHeader from "./cartHeader/cartHeader";
import nav from "@/layout/nav/nav";
import CartPrice from "./cartPrice/cartPrice";
import CartItems from "./cartItems/cartItems";

export default function Cart() {
  return El({
    element: "div",
    className: "px-6",
    children: [CartHeader("My Cart"), CartItems(), CartPrice(), nav()],
  });
}
