import El from "@/utils/El/El.js";
import Header from "./header/header";
import LoginForm from "./inputs/inputs";

export default function Login() {
  return El({
    element: "div",
    className: "relative px-6 pb-8 pt-3 h-[926px]",
    children: [Header(), LoginForm()],
  });
}
