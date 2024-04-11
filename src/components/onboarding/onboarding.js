import El from "@/utils/El/El.js";
import One from "./one/one.js";
import Two from "./two/two.js";
import Slider from "./slider/slider.js";

// function returnOnboarding() {
//   One();
//   setTimeout(() => {
//     Two;
//     setTimeout(Slider(), 3000);
//   }, 3000);
// }

export default function Onboarding() {
  return El({
    element: "div",
    children: [Slider()],
  });
}
