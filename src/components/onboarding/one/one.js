import El from "@/utils/El/El.js";

export default function One() {
  return El({
    element: "div",
    className:
      "flex flex-col items-center gap-[306px] pt-[392px] pr-[98px] pb-[117px] pl-[99px]",
    children: [
      El({
        element: "img",
        src: "./src/assets/images/logo with shoea.svg",
      }),
      El({
        element: "img",
        src: "./src/assets/images/spinner.svg",
        className: "animate-spin",
      }),
    ],
  });
}
