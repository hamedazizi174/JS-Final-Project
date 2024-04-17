import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import Button from "../shared/button/button";

export default function SingleProduct(product) {
  return El({
    element: "div",
    className: "px-6 pt-20 relative",
    children: [
      HomeHeader(),
      El({
        element: "img",
        className: "h-96",
        // src: product.imageURL,
      }),
      El({
        element: "div",
        className: "mb-4",
        children: [
          El({
            element: "div",
            className: "flex justify-between items-center mb-4",
            children: [
              El({
                element: "h1",
                className: "w-64 text-xl font-bold",
                // innerText: product.name,
              }),
              El({
                element: "div",
                src: "",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex mb-4",
            children: [
              El({
                element: "span",
                className:
                  "bg-[#ECECEC] text-xs px-2 py-1 rounded-sm flex justify-center items-center mr-4",
                innerText: "5,371 sold",
              }),
              El({
                element: "div",
                className: "flex justify-center items-center",
                children: [
                  El({
                    element: "img",
                    src: "",
                  }),
                  El({
                    element: "span",
                    className: "text-xs",
                    innerText: "4.3 (5,389 reviews)",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "hr",
          }),
        ],
      }),
      El({
        element: "div",
        className: "py-6",
        children: [
          El({
            element: "div",
            className: "mb-4",
            children: [
              El({
                element: "h2",
                className: "font-bold mb-3",
                innerText: "Description",
              }),
              El({
                element: "p",
                className: "text-xs mb-3",
                innerText:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
                children: [
                  El({
                    element: "span",
                    className: "font-bold",
                    innerText: "view more..",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex gap-10 mb-3",
                children: [
                  El({
                    element: "div",
                    className: "flex flex-col",
                    children: [
                      El({
                        element: "h2",
                        className: "font-bold mb-3",
                        innerText: "Size",
                      }),
                      El({
                        element: "div",
                        className: "flex gap-2 mb-3",
                        // children: product.sizes.map((size) => {
                        //   return El({
                        //     element: "div",
                        //     className:
                        //       "w-9 h-9 flex justify-center items-center text-secondry border-solid border-secondry border-2 rounded-full",
                        //     children: [
                        //       El({
                        //         element: "span",
                        //         className: "text-xs font-bold",
                        //         innerText: size,
                        //       }),
                        //     ],
                        //   });
                        // }),
                      }),
                    ],
                  }),
                  El({
                    element: "div",
                    className: "flex flex-col",
                    children: [
                      El({
                        element: "h2",
                        className: "font-bold mb-3",
                        innerText: "Color",
                      }),
                      El({
                        element: "div",
                        className: "flex gap-2",
                        // children: product.colors.map((color) => {
                        //   return El({
                        //     element: "div",
                        //     className:
                        //       "w-9 h-9 flex justify-center bg-[black] items-center rounded-full",
                        //   });
                        // }),
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-start items-center gap-10 mb-5",
                children: [
                  El({
                    element: "h2",
                    className: "font-bold",
                    innerText: "Quantity",
                  }),
                  El({
                    element: "div",
                    className:
                      "flex items-center bg-[#ECECEC] py-2 rounded-full",
                    children: [
                      El({
                        element: "button",
                        className: "font-bold px-4 rounded-full",
                        children: [
                          El({
                            element: "span",
                            className: "flex items-center icon-[ep--minus]",
                          }),
                        ],
                      }),
                      El({
                        element: "span",
                        className: "font-bold px-3",
                        innerText: "0",
                      }),
                      El({
                        element: "button",
                        className: "font-bold px-4 rounded-full",
                        children: [
                          El({
                            element: "span",
                            className: "flex items-center icon-[ep--plus]",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "hr",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between",
            children: [
              El({
                element: "div",
                className: "flex flex-col",
                children: [
                  El({
                    element: "span",
                    className: "text-xxs mb-2",
                    innerText: "Total price",
                  }),
                  El({
                    element: "span",
                    className: "text-lg font-bold",
                    innerText: "$ 0.00",
                  }),
                ],
              }),
              Button("Add to Cart"),
            ],
          }),
        ],
      }),
    ],
  });
}
