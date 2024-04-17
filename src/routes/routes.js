import brandPage from "@/pages/brand/brand";
import homePage from "@/pages/home/home";
import loginPage from "@/pages/login/login";
import mostPopularPage from "@/pages/mostPopular/mostPopular";
import onboardingPage from "@/pages/onboarding/onboarding";
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
  .on("/brand", () => {
    changePage(brandPage);
  })
  .on("/mostPopular", () => {
    changePage(mostPopularPage);
  });
