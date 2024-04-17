import SingleProduct from "@/components/singleProduct/singleProduct";
import El from "@/utils/El/El";

export default function singleProductPage() {
  return El({
    element: "div",
    children: [SingleProduct()],
  });
}
