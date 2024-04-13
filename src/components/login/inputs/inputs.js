import El from "@/utils/El/El.js";
import Button from "@/components/shared/button/button";

const envelopeGrey = "http://localhost:5173/src/assets/images/envelopeGrey.svg";
const envelopeBlack =
  "http://localhost:5173/src/assets/images/envelopeBlack.svg";
const lockGrey = "http://localhost:5173/src/assets/images/lockGrey.svg";
const lockBlack = "http://localhost:5173/src/assets/images/lockBlack.svg";
const hiddenGrey = "http://localhost:5173/src/assets/images/eye-slash.svg";
const hiddenBlack =
  "http://localhost:5173/src/assets/images/eye-slash-black.svg";
const showGrey = "http://localhost:5173/src/assets/images/showGrey.svg";
const showBlack = "http://localhost:5173/src/assets/images/showBlack.svg";

export default function LoginForm() {
  return El({
    element: "form",
    className: "",
    type: "submit",
    children: [
      El({
        element: "div",
        className:
          "flex items-center py-2 px-3 bg-lightGrey rounded gap-1 mb-5",
        children: [
          El({
            element: "img",
            className: "p-px",
            src: envelopeGrey,
          }),
          El({
            element: "input",
            className: "bg-transparent pb-0.5 grow outline-none",
            type: "email",
            placeholder: "Email",
            required: true,
            eventListener: [
              {
                event: "keyup",
                callback: (event) => {
                  const el = event.target;
                  const pel = el.previousSibling;
                  if (el.value !== "" && pel.src === envelopeGrey) {
                    pel.src = envelopeBlack;
                  }
                  if (el.value === "" && pel.src === envelopeBlack) {
                    pel.src = envelopeGrey;
                  }
                },
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex py-2 px-3 bg-lightGrey rounded gap-1 mb-10",
        children: [
          El({
            element: "img",
            className: "p-px",
            src: lockGrey,
          }),
          El({
            element: "input",
            type: "password",
            className: "bg-transparent grow outline-none",
            placeholder: "Password",
            required: true,
            eventListener: [
              {
                event: "keyup",
                callback: (event) => {
                  const el = event.target;
                  const nel = el.nextSibling;
                  const pel = el.previousSibling;
                  if (el.value !== "" && pel.src === lockGrey) {
                    pel.src = lockBlack;
                    if (nel.src === hiddenGrey) {
                      nel.src = hiddenBlack;
                    } else {
                      nel.src = showBlack;
                    }
                  }
                  if (el.value === "" && pel.src === lockBlack) {
                    pel.src = lockGrey;
                    // nel.src = hiddenGrey;
                    if (nel.src === hiddenBlack) {
                      nel.src = hiddenGrey;
                    } else {
                      nel.src = showGrey;
                    }
                  }
                },
              },
            ],
          }),
          El({
            element: "img",
            className: "p-px cursor-pointer",
            src: hiddenGrey,
            eventListener: [
              {
                event: "click",
                callback: (event) => {
                  const el = event.target;
                  switch (el.src) {
                    case hiddenGrey:
                      el.src = showGrey;
                      el.previousSibling.type = "text";
                      break;
                    case hiddenBlack:
                      el.src = showBlack;
                      el.previousSibling.type = "text";
                      break;
                    case showGrey:
                      el.src = hiddenGrey;
                      el.previousSibling.type = "password";
                      break;
                    case showBlack:
                      el.src = hiddenBlack;
                      el.previousSibling.type = "password";
                      break;
                  }
                },
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center justify-center",
        children: [
          El({
            element: "input",
            className:
              "rounded w-4 h-4 mr-2 accent-black border-4 border-blue-500",
            type: "checkbox",
          }),
          El({
            element: "label",
            className: "text-dark ",
            innerText: "Remember me",
          }),
        ],
      }),
      Button("Sign in", "absolute bottom-8 left-6 w-[380px] h-11"),
    ],
    eventListener: [
      {
        event: "submit",
        callback: (event) => {
          event.preventDefault();
        },
      },
    ],
  });
}
