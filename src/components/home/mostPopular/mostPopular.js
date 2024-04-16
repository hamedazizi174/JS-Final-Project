import Brand from "@/components/shared/brand/brand";
import El from "@/utils/El/El";

export default function MostPopular() {
  return El({
    element: "div",
    className: "mb-6",
    children: [
      El({
        element: "div",
        className: "flex justify-between mb-5",
        children: [
          El({
            element: "p",
            className: "text-primary text-xl font-semibold",
            innerText: "Most Popular",
          }),
          El({
            element: "p",
            className: "text-primary font-semibold",
            innerText: "See All",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-3 overflow-x-auto no-scrollbar",
        children: [
          Brand("All", "bg-secondry text-white"),
          Brand("Nike", "text-black"),
          Brand("Adidas", "text-black"),
          Brand("Puma", "text-black"),
          Brand("Asics", "text-black"),
          Brand("Reebok", "text-black"),
          Brand("NewBa", "text-black"),
          Brand("Converse", "text-black"),
        ],
      }),
    ],
  });
}
