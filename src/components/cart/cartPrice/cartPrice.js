import Button from "@/components/shared/button/button";
import El from "@/utils/El/El";

export default function CartPrice() {
  return El({
    element: "div",
    className: "flex gap-5 pt-3 pb-5 fixed bottom-16 bg-white",
    children: [
      El({
        element: "div",
        className: "pl-3",
        children: [
          El({
            element: "p",
            className: "text-sm mb-2",
            innerText: "Total Price",
          }),
          El({
            element: "p",
            className: "font-bold text-2xl",
            innerText: `$100.00`,
          }),
        ],
      }),
      Button("Checkout  ->", "w-64"),
    ],
  });
}
