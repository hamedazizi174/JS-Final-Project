import El from "@/utils/El/El";

export default function MostPopularBrand(text, className) {
  return El({
    element: "div",
    className: `py-2.5 px-5 flex justify-center items-center rounded-3xl border-2 border-secondry font-semibold text-nowrap ${className}`,
    innerText: text,
    // eventListener: [
    //   {
    //     event: "click",
    //     callback: (event) => {
    //       event.target.classList.add("bg-secondry", "text-white");
    //       event.target.classList.remove("text-black");
    //     },
    //   },
    // ],
  });
}
