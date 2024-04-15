import homePage from "@/pages/home/home";
import loginPage from "@/pages/login/login";
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
  });
