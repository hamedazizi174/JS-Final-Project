import Home from "@/components/home/home";
import nav from "@/layout/nav/nav";
import El from "@/utils/El/El.js";

export default function homePage() {
  return El({
    element: "div",
    children: [Home(), nav()],
  });
}
