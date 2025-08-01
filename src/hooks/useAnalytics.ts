import { track } from "@vercel/analytics";

export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    track(eventName, properties);
  };

  const trackPageView = (page: string) => {
    track("page_view", { page });
  };

  const trackClick = (element: string, location: string) => {
    track("click", { element, location });
  };

  const trackDownload = (fileName: string) => {
    track("download", { fileName });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick,
    trackDownload,
  };
};
