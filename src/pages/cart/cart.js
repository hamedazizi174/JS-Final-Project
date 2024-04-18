import Cart from "@/components/cart/cart";
import El from "@/utils/El/El";

export default function cartPage() {
  return El({
    element: "div",
    children: [Cart()],
  });
}
