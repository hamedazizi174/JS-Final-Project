import El from "@/utils/El/El.js";
import Button from "@/components/shared/button/button";
import { getData } from "@/library/axios/axios";
import { router } from "@/routes/routes";
import Cookies from "js-cookie";

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

const jsonUser = await getData("users");

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
            id: "envelope",
            className: "p-px",
            src: envelopeGrey,
          }),
          El({
            element: "input",
            id: "email",
            className: "bg-transparent pb-0.5 grow outline-none",
            type: "email",
            name: "email",
            placeholder: "Email",
            required: true,
            eventListener: [
              {
                event: "keyup",
                callback: (event) => {
                  const el = event.target;
                  // const pel = event.target.previousSibling;
                  if (el.value !== "" && envelope.src === envelopeGrey) {
                    envelope.src = envelopeBlack;
                  }
                  if (el.value === "" && envelope.src === envelopeBlack) {
                    envelope.src = envelopeGrey;
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
            id: "lock",
            className: "p-px",
            src: lockGrey,
          }),
          El({
            element: "input",
            id: "password",
            type: "password",
            className: "bg-transparent grow outline-none",
            name: "password",
            placeholder: "Password",
            required: true,
            eventListener: [
              {
                event: "keyup",
                callback: (event) => {
                  const el = event.target;
                  // const nel = el.nextSibling;
                  // const pel = el.previousSibling;
                  if (el.value !== "" && lock.src === lockGrey) {
                    lock.src = lockBlack;
                    if (eye.src === hiddenGrey) {
                      eye.src = hiddenBlack;
                    } else {
                      eye.src = showBlack;
                    }
                  }
                  if (el.value === "" && lock.src === lockBlack) {
                    lock.src = lockGrey;
                    // nel.src = hiddenGrey;
                    if (eye.src === hiddenBlack) {
                      eye.src = hiddenGrey;
                    } else {
                      eye.src = showGrey;
                    }
                  }
                },
              },
            ],
          }),
          El({
            element: "img",
            id: "eye",
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
                      password.type = "text";
                      break;
                    case hiddenBlack:
                      el.src = showBlack;
                      password.type = "text";
                      break;
                    case showGrey:
                      el.src = hiddenGrey;
                      password.type = "password";
                      break;
                    case showBlack:
                      el.src = hiddenBlack;
                      password.type = "password";
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
            id: "checkbox",
            className: "rounded w-4 h-4 mr-2 accent-black",
            type: "checkbox",
          }),
          El({
            element: "label",
            className: "text-dark ",
            innerText: "Remember me",
          }),
        ],
      }),
      Button(
        "Sign in",
        "absolute bottom-8 left-6 w-[380px] h-11 cursor-not-allowed opacity-65",
        [],
        "disabled:true"
      ),
    ],
    eventListener: [
      {
        event: "submit",
        callback: (event) => {
          event.preventDefault();
          const user = Object.fromEntries(new FormData(event.target));
          if (
            user.email === jsonUser[0].email &&
            user.password === jsonUser[0].password
          ) {
            if (checkbox.checked) {
              Cookies.set("isLogin", true, { expires: 1 });
            } else {
              sessionStorage.setItem("isLogin", true);
            }
            router.navigate("/home");
          } else {
            alert("wrong credentials");
            event.target.reset();
            const login = document.querySelector("button");
            envelope.src = envelopeGrey;
            lock.src = lockGrey;
            eye.src = hiddenGrey;
            login.classList.add("cursor-not-allowed", "opacity-65");
            login.disabled = true;
          }
        },
      },
      {
        event: "input",
        callback: () => {
          const email = document.getElementById("email");
          const password = document.getElementById("password");
          const login = document.querySelector("button");
          if (email.value !== "" && password.value !== "") {
            login.classList.remove("cursor-not-allowed", "opacity-65");
            login.disabled = false;
          } else {
            login.classList.add("cursor-not-allowed", "opacity-65");
            login.disabled = true;
          }
        },
      },
    ],
  });
}
