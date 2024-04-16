import El from "@/utils/El/El";

const profilePicture =
  "http://localhost:5173/src/assets/images/profilePicture.png";

export default function Header() {
  return El({
    element: "div",
    className: "py-4 flex gap-4 mb-2",
    children: [
      El({
        element: "img",
        src: profilePicture,
        className: "rounded-full",
      }),
      El({
        element: "div",
        className: "flex flex-col gap-2.5 grow",
        children: [
          El({
            element: "p",
            className: "font-medium text-lighterGrey",
            innerText: "Good Morning 👋",
          }),
          El({
            element: "p",
            className: "text-primary font-bold",
            innerText: "Hamed Azizi",
          }),
        ],
      }),
      El({
        element: "img",
        src: "./src/assets/images/bellEmpty.svg",
      }),
      El({
        element: "img",
        src: "./src/assets/images/likeEmpty.svg",
      }),
    ],
  });
}
