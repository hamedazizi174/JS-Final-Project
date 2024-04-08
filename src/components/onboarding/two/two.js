import El from "@/utils/El/El.js";

export default function two() {
  return El({
    element: "div",
    className:
      "bg-[url(./src/assets/images/onboarding2.png)] w-screen h-screen flex flex-col justify-end",
    children: [
      El({
        element: "div",
        className: "pr-[33px] pb-[85px] pl-[31px] ",
        children: [
          El({
            element: "div",
            className: "flex items-center gap-3 mb-4",
            children: [
              El({
                element: "p",
                className: "text-white text-40 font-semibold",
                innerText: "Welcome to",
              }),
              El({
                element: "img",
                src: "./src/assets/images/👋.png",
              }),
            ],
          }),
          El({
            element: "p",
            className: "text-white text-7xl font-bold mb-7",
            innerText: "Shoea",
          }),
          El({
            element: "p",
            className: "text-white text-base font-semibold",
            innerText:
              "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
          }),
        ],
      }),
    ],
  });
}
