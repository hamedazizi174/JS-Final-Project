import El from "@/utils/El/El";

const blackLogo = "http://localhost:5173/src/assets/images/black logo.svg";
const search = "http://localhost:5173/src/assets/images/search.svg";
const more = "http://localhost:5173/src/assets/images/more.svg";

export default function OrdersHeader(text = "") {
  return El({
    element: "div",
    className: "py-3 flex items-center gap-4 fixed top-4 w-screen bg-white",
    children: [
      El({
        element: "img",
        className: "w-7",
        src: blackLogo,
      }),
      El({
        element: "p",
        className: "text-primary font-extrabold text-2xl h-8 w-64",
        innerText: text,
      }),
      El({
        element: "img",
        className: "w-7",
        src: search,
      }),
      El({
        element: "img",
        className: "w-7",
        src: more,
      }),
    ],
  });
}
