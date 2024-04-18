import El from "@/utils/El/El";

export default function ActiveComplete() {
  return El({
    element: "div",
    className: "flex mt-5 text-xl",
    children: [
      El({
        element: "div",
        id: "firstChild",
        className:
          "text-primary border-b-4 border-secondry grow text-center font-semibold p-3",
        innerText: "Active",
      }),
      El({
        element: "div",
        id: "secondChild",
        className:
          "text-gray-400 grow text-center font-semibold p-3 border-secondry",
        innerText: "Completed",
      }),
    ],
    eventListener: [
      {
        event: "click",
        callback: (event) => {
          event.target.classList.add("border-b-4", "text-primary");
          event.target.classList.remove("text-gray-400");

          event.target?.previousSibling?.classList.add("text-gray-400");
          event.target?.previousSibling?.classList.remove("border-b-4");

          event.target?.nextSibling?.classList.add("text-gray-400");
          event.target?.nextSibling?.classList.remove("border-b-4");
        },
      },
    ],
  });
}
