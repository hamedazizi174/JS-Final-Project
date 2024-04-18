import Product from "@/components/shared/product/product";
import { getData, getDataByBrand } from "@/library/axios/axios";
import El from "@/utils/El/El";

export default function Products(data) {
  const productWrapper = El({
    element: "div",
    id: "productWrapper",
    className: "grid grid-cols-2 gap-x-4 gap-y-6 pb-20",
  });

  switch (data.brand) {
    case "NIKE":
    case "PUMA":
    case "ADIDAS":
    case "ASICS":
    case "NEW BALANCE":
    case "CONVERSE":
    case "REEBOK":
      const productBrand = data.brand;
      getDataByBrand(productBrand).then((res) => {
        res.forEach((product) => {
          productWrapper.append(
            Product(product.name, product.imageURL, product.price, product.id)
          );
        });
      });
      break;
    default:
      getData("products").then((res) => {
        res.forEach((product) => {
          productWrapper.append(
            Product(product.name, product.imageURL, product.price, product.id)
          );
        });
      });
  }
  return productWrapper;
}
