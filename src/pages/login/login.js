import Login from "@/components/login/login";
import El from "@/utils/El/El.js";

export default function loginPage() {
  return El({
    element: "div",
    children: [Login()],
  });
}
