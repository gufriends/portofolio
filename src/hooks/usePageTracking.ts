import { useEffect } from "react";
import { track } from "@vercel/analytics";

export const usePageTracking = () => {
  useEffect(() => {
    let startTime = Date.now();
    let scrollDepth = 0;

    const trackScrollDepth = () => {
      const currentScroll = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round(
        (currentScroll / documentHeight) * 100
      );

      if (scrollPercentage > scrollDepth && scrollPercentage % 25 === 0) {
        scrollDepth = scrollPercentage;
        track("scroll_depth", { depth: scrollPercentage });
      }
    };

    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      track("time_on_page", { seconds: timeSpent });
    };

    window.addEventListener("scroll", trackScrollDepth);
    window.addEventListener("beforeunload", trackTimeOnPage);

    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("beforeunload", trackTimeOnPage);
    };
  }, []);
};
