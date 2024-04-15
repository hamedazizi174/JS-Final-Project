import NavItem from "@/components/shared/navItem/navItem";
import El from "@/utils/El/El";

const homeFill = "http://localhost:5173/src/assets/images/homeFill.svg";
const cartEmpty = "http://localhost:5173/src/assets/images/cartEmpty.svg";
const orderEmpty = "http://localhost:5173/src/assets/images/orderEmpty.svg";
const walletEmpty = "http://localhost:5173/src/assets/images/walletEmpty.svg";
const profileEmpty = "http://localhost:5173/src/assets/images/profileEmpty.svg";

export default function nav() {
  return El({
    element: "div",
    className:
      "flex justify-center items-center gap-11 pt-3 px-12 pb-4 fixed bottom-0",
    children: [
      NavItem(homeFill, "Home"),
      NavItem(cartEmpty, "Cart"),
      NavItem(orderEmpty, "Order"),
      NavItem(walletEmpty, "Wallet"),
      NavItem(profileEmpty, "Profile"),
    ],
  });
}
