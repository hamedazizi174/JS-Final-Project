import Orders from "@/components/orders/orders";
import El from "@/utils/El/El";

export default function ordersPage() {
  return El({
    element: "div",
    children: [Orders()],
  });
}
