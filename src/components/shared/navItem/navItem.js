import El from "@/utils/El/El";

export default function NavItem(src, title) {
  return El({
    element: "div",
    children: [
      El({
        element: "img",
        className: "ml-[3px] mr-1 mb-0.5",
        src: src,
      }),
      El({
        element: "p",
        className: "text-primary text-10 font-semibold text-center",
        innerText: title,
      }),
    ],
  });
}
