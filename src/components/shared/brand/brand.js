import El from "@/utils/El/El";

export default function MostPopularBrand(text, className) {
  return El({
    element: "div",
    className: `py-2.5 px-5 flex justify-center items-center rounded-3xl border-2 border-secondry font-semibold ${className}`,
    innerText: text,
  });
}
