import { router } from "@/routes/routes";
import El from "../El/El";

export function Link({ href, ...rest }) {
  return El({
    element: "a",
    href,
    eventListener: [
      {
        event: "click",
        callback: (event) => {
          event.preventDefault();
          router.navigate(href);
        },
      },
    ],
    ...rest,
  });
}
