import ReactGA from "react-ga4";

// Replace with your GA4 Measurement ID
const MEASUREMENT_ID = "G-R64MZ9N6QZ"; 

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
