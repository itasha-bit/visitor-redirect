// CHANGE THIS URL WHENEVER YOU WANT
const DESTINATION_URL =
  "https://www.youtube.com/watch?v=voL49uXJiV4";

// Redirect after a short delay
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.location.replace(DESTINATION_URL);
  }, 5000);
});
