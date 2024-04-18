import MostPopularBrand from "@/components/shared/brand/brand";
import { router } from "@/routes/routes";
import El from "@/utils/El/El";

export default function MostPopular() {
  const element = El({
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
          MostPopularBrand("All", "bg-secondry text-white a"),
          MostPopularBrand("Nike", "text-black a"),
          MostPopularBrand("Adidas", "text-black a"),
          MostPopularBrand("Puma", "text-black a"),
          MostPopularBrand("Asics", "text-black a"),
          MostPopularBrand("Reebok", "text-black a"),
          MostPopularBrand("New Balance", "text-black a"),
          MostPopularBrand("Converse", "text-black a"),
        ],
        eventListener: [
          {
            event: "click",
            callback: (event) => {
              if (event.target.classList.contains("a")) {
                const brandsArr = document.querySelectorAll(".a");
                brandsArr.forEach((item) => {
                  item.classList.remove("bg-secondry", "text-white");
                });
                event.target.classList.add("bg-secondry", "text-white");
                event.target.classList.remove("text-black");
              }
            },
          },
        ],
      }),
    ],
  });

  return element;
}
