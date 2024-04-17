import { router } from "@/routes/routes";
import El from "@/utils/El/El";

const src = "http://localhost:5173/src/assets/images/arrow-left-short.svg";

export default function HomeHeader(text = "", elem = El({ element: "div" })) {
  return El({
    element: "div",
    className: "py-3 flex items-center gap-3 fixed top-0 w-full bg-white",
    children: [
      El({
        element: "img",
        src,
        eventListener: [
          {
            event: "click",
            callback: () => {
              router.navigate("/home");
            },
          },
        ],
      }),
      El({
        element: "p",
        className: "text-primary font-semibold text-xl h-8",
        innerText: text,
      }),
      elem,
    ],
  });
}
