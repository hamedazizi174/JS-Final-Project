import BrandPage from "@/components/brandPage/brandPage";
import El from "@/utils/El/El.js";

export default function brandPage() {
  return El({
    element: "div",
    children: [BrandPage()],
  });
}
