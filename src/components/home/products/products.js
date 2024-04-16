import Product from "@/components/shared/product/product";
import { getData } from "@/library/axios/axios";
import El from "@/utils/El/El";

export default function Products() {
  const productWrapper = El({
    element: "div",
    className: "grid grid-cols-2 gap-x-4 gap-y-6 pb-20",
  });

  getData("products").then((res) => {
    res.forEach((product) => {
      productWrapper.append(
        Product(product.name, product.imageURL, product.price)
      );
    });
  });
  return productWrapper;
}
