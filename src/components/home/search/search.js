import El from "@/utils/El/El";

const search = "http://localhost:5173/src/assets/images/search.svg";

export default function Search() {
  return El({
    element: "div",
    className: "flex items-center py-2 px-3 bg-lightGrey rounded gap-1 mb-2.5",
    children: [
      El({
        element: "img",
        className: "p-px",
        src: search,
      }),
      El({
        element: "input",
        className: "bg-transparent grow outline-none",
        placeholder: "Search",
      }),
    ],
  });
}
