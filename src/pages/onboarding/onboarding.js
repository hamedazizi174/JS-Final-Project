import Onboarding from "@/components/onboarding/onboarding.js";
import El from "@/utils/El/El.js";

export default function onboardingPage() {
  return El({
    element: "div",
    children: [Onboarding()],
  });
}
