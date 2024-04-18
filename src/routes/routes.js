import brandPage from "@/pages/brand/brand";
import cartPage from "@/pages/cart/cart";
import homePage from "@/pages/home/home";
import loginPage from "@/pages/login/login";
import mostPopularPage from "@/pages/mostPopular/mostPopular";
import onboardingPage from "@/pages/onboarding/onboarding";
import ordersPage from "@/pages/orders/orders";
import singleProductPage from "@/pages/singleProduct/singleProduct";
import wishlistPage from "@/pages/wishlist/wishlist";
import changePage from "@/utils/changePage/changePage";
import Navigo from "navigo";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(onboardingPage);
  })
  .on("/login", () => {
    changePage(loginPage);
  })
  .on("/home", () => {
    changePage(homePage);
  })
  .on("/brand/:brand", ({ data }) => {
    changePage(brandPage, data);
  })
  .on("/mostPopular", () => {
    changePage(mostPopularPage);
  })
  .on("/wishlist", () => {
    changePage(wishlistPage);
  })
  .on("/singleProduct/:id", ({ data }) => {
    changePage(singleProductPage, data);
  })
  .on("/orders", () => {
    changePage(ordersPage);
  })
  .on("/cart", () => {
    changePage(cartPage);
  });
