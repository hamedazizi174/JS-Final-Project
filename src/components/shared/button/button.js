import El from "@/utils/El/El";

export default function Button(text, className, e) {
  return El({
    element: "button",
    className: `flex justify-center items-center text-white py-3 px-4 bg-dark rounded-[30px] ${className}`,
    innerText: text,
    eventListener: e,
  });
}
