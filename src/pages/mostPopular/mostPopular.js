import MostPopularPage from "@/components/mostPopular/mostPopular";
import El from "@/utils/El/El";

export default function mostPopularPage() {
  return El({
    element: "div",
    children: [MostPopularPage()],
  });
}
