import El from "@/utils/El/El.js";
import One from "./one/one.js";
import Two from "./two/two.js";
import Slider from "./slider/slider.js";

export default function Onboarding() {
  const x = () => {
    setTimeout(() => {
      const a = document.getElementById("onboardWrapper");
      a.innerHTML = "";
      a.append(Two());
      setTimeout(() => {
        a.innerHTML = "";
        a.append(Slider());
      }, 3000);
    }, 3000);
    return One();
  };

  return El({
    element: "div",
    id: "onboardWrapper",
    children: [x()],
  });
}
