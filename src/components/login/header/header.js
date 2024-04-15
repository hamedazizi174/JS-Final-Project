import { router } from "@/routes/routes";
import El from "@/utils/El/El.js";

export default function Header() {
  return El({
    element: "div",
    className: "mb-12",
    children: [
      El({
        element: "img",
        className: "cursor-pointer",
        src: "./src/assets/images/arrow-left-short.svg",
        eventListener: [
          {
            event: "click",
            callback: () => {
              localStorage.removeItem("firstTime");
              router.navigate("/");
            },
          },
        ],
      }),
      El({
        element: "img",
        className: "mx-auto mb-[118px] pt-[132px]",
        src: "./src/assets/images/black logo.svg",
      }),
      El({
        element: "p",
        className: "text-32 font-semibold text-center",
        innerText: "Login to Your Account",
      }),
    ],
  });
}

// window.history.back()
