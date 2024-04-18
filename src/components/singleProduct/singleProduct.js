import El from "@/utils/El/El";
import HomeHeader from "../shared/homeHeader/homeHeader";
import Button from "../shared/button/button";
import { router } from "@/routes/routes";
import { patchData } from "@/library/axios/axios";

export default function SingleProduct(data) {
  // console.log(data);
  function minus() {
    let quantity = document.getElementById("quantity");
    let price = document.getElementById("price");
    if (quantity.innerText > 0) {
      quantity.innerText--;
    }
    price.innerText = quantity.innerText * data.price;
  }
  function plus() {
    let quantity = document.getElementById("quantity");
    let price = document.getElementById("price");
    quantity.innerText++;
    price.innerText = quantity.innerText * data.price;
  }
  return El({
    element: "div",
    className: "px-6 relative",
    children: [
      HomeHeader(),
      El({
        element: "img",
        className: "h-96",
        src: data.imageURL,
      }),
      El({
        element: "div",
        children: [
          El({
            element: "div",
            className: "flex justify-between items-center mb-4",
            children: [
              El({
                element: "h1",
                className: "w-64 text-xl font-bold",
                innerText: data.name,
              }),
              El({
                element: "img",
                src: "/src/assets/images/likeEmpty.svg",
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
                    className: "w-7",
                    src: "/src/assets/images/star.svg",
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
        className: "py-2",
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
                        children: data.sizes.map((size) => {
                          return El({
                            element: "div",
                            className:
                              "w-9 h-9 flex justify-center items-center text-secondry border-solid border-secondry border-2 rounded-full hover:bg-lighterGrey hover:text-white",
                            children: [
                              El({
                                element: "span",
                                className: "text-xs font-bold",
                                innerText: size,
                              }),
                            ],
                          });
                        }),
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
                        children: data.colors.map((color) => {
                          return El({
                            element: "div",
                            className: `w-9 h-9 flex justify-center  items-center rounded-full hover:border-4 hover:border-green-700`,
                            restAttrs: {
                              style: `background-color:${color}`,
                            },
                          });
                        }),
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
                            element: "img",
                            className: "",
                            src: "/src/assets/images/minus.svg",
                          }),
                        ],
                        eventListener: [
                          {
                            event: "click",
                            callback: minus,
                          },
                        ],
                      }),
                      El({
                        element: "span",
                        id: "quantity",
                        className: "font-bold px-3",
                        innerText: "1",
                      }),
                      El({
                        element: "button",
                        className: "font-bold px-4 rounded-full",
                        children: [
                          El({
                            element: "img",
                            className: "",
                            src: "/src/assets/images/add.svg",
                          }),
                        ],
                        eventListener: [
                          {
                            event: "click",
                            callback: plus,
                          },
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
                    id: "price",
                    className: "text-lg font-bold",
                    innerText: `$${data.price}`,
                  }),
                ],
              }),
              Button("Add to Cart", "w-64", [
                {
                  event: "click",
                  callback: () => {
                    patchData(data);
                  },
                },
              ]),
            ],
          }),
        ],
      }),
    ],
  });
}
