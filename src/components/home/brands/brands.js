import El from "@/utils/El/El";

const asics = "http://localhost:5173/src/assets/images/asics.png";
const reebok = "http://localhost:5173/src/assets/images/reebok.png";
const more = "http://localhost:5173/src/assets/images/more.png";
const newBa = "http://localhost:5173/src/assets/images/newBa.png";
const nike = "http://localhost:5173/src/assets/images/nike.png";
const adidas = "http://localhost:5173/src/assets/images/adidas.png";
const puma = "http://localhost:5173/src/assets/images/puma.png";
const converse = "http://localhost:5173/src/assets/images/converse.png";

export default function Brands() {
  return El({
    element: "div",
    className: "py-3 mb-4 grid grid-cols-4 gap-x-10 gap-y-7",
    children: [
      El({
        element: "img",
        src: nike,
      }),
      El({
        element: "img",
        src: adidas,
      }),
      El({
        element: "img",
        src: puma,
      }),
      El({
        element: "img",
        src: asics,
      }),
      El({
        element: "img",
        src: reebok,
      }),
      El({
        element: "img",
        src: newBa,
      }),
      El({
        element: "img",
        src: converse,
      }),
      El({
        element: "img",
        src: more,
      }),
    ],
  });
}
