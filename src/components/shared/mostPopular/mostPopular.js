import MostPopularBrand from "@/components/shared/brand/brand";
import { router } from "@/routes/routes";
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
            eventListener: [
              {
                event: "click",
                callback: () => {
                  router.navigate("/mostPopular");
                },
              },
            ],
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
          MostPopularBrand("All", "bg-secondry text-white"),
          MostPopularBrand("Nike", "text-black"),
          MostPopularBrand("Adidas", "text-black"),
          MostPopularBrand("Puma", "text-black"),
          MostPopularBrand("Asics", "text-black"),
          MostPopularBrand("Reebok", "text-black"),
          MostPopularBrand("NewBa", "text-black"),
          MostPopularBrand("Converse", "text-black"),
        ],
      }),
    ],
  });
}
