import El from "@/utils/El/El";
import OrdersHeader from "./ordersHeader/ordersHeader";
import ActiveComplete from "./activeComplete/activeComplete";
import nav from "@/layout/nav/nav";

export default function Orders() {
  return El({
    element: "div",
    className: "px-6 pt-20",
    children: [OrdersHeader("My Orders"), ActiveComplete(), nav()],
  });
}
