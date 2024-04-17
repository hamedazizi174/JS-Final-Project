import Wishlist from "@/components/wishlist/wishlist";
import El from "@/utils/El/El";

export default function wishlistPage() {
  return El({
    element: "div",
    children: [Wishlist()],
  });
}
