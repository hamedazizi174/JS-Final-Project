import El from "@/utils/El/El";

export default function Product(name, src, price) {
  return El({
    element: "div",
    className: "w-[182px] h-[244px]",
    children: [
      El({
        element: "img",
        className: "w-[182px] h-[182px] rounded-3xl",
        src: src,
      }),
      El({
        element: "p",
        className:
          "w-[182px] mt-3 mb-2 overflow-hidden text-primary text-xl font-bold",
        innerText: name,
      }),
      El({
        element: "p",
        className: "text-primary font-semibold",
        innerText: price,
      }),
    ],
  });
}
