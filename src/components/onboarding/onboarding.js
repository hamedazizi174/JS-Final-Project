import El from "@/utils/El/El.js";
import one from "./one/one.js";

export default function onboarding() {
  return El({
    element: "div",
    children: [one()],
  });
}
