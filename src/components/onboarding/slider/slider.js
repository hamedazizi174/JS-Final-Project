import El from "@/utils/El/El";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Slider() {
  setTimeout(configSwiper, 0);
  return El({
    element: "div",
    className: "swiper h-screen",
    children: [
      El({
        element: "div",
        className: "swiper-wrapper",
        children: [
          El({
            element: "div",
            className: "swiper-slide",
            children: [
              El({ element: "img", src: "./src/assets/images/slider1.png" }),
              El({
                element: "div",
                className: "text-center text-32 mt-8 font-semibold",
                innerText: "We provide high quality products just for you",
              }),
            ],
          }),
          El({
            element: "div",
            className: "swiper-slide",
            children: [
              El({ element: "img", src: "./src/assets/images/slider2.png" }),
              El({
                element: "div",
                className: "text-center text-32 mt-8 font-semibold",
                innerText: "Your satisfaction is our number one periority",
              }),
            ],
          }),
          El({
            element: "div",
            className: "swiper-slide",
            children: [
              El({ element: "img", src: "./src/assets/images/slider3.png" }),
              El({
                element: "div",
                className: "text-center text-32 mt-8 mx-4 font-semibold",
                innerText:
                  "Let's fulfill your fashion needs with shoea right now!",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "swiper-pagination",
      }),
      El({
        element: "button",
        className:
          "absolute flex justify-center items-center text-white bottom-8 left-6 py-3 px-4 w-[380px] h-11 top-auto bg-dark rounded-[30px] z-10",
        innerText: "Next",
        eventListener: [
          {
            event: "click",
            callback: (event) => {
              const swiper = document.querySelector(".swiper").swiper;
              swiper.slideNext();
              if (swiper.activeIndex === 2) {
                event.target.innerText = "Get Started";
                // Router().navigation("/login");
              }
            },
          },
        ],
      }),
    ],
  });
}
function configSwiper() {
  const swiper = new Swiper(".swiper", {
    // cssMode: true,
    allowSlidePrev: false,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
