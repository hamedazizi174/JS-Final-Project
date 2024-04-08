import El from "@/utils/El/El.js";
import one from "./one/one.js";
import two from "./two/two.js";

export default function onboarding() {
  return El({
    element: "div",
    children: [two()],
  });
}
