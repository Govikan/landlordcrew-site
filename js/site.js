/**
 * LandlordCrew marketing site — light motion + store link helpers.
 * Safe for GitHub Pages (no build step).
 */
(function () {
  const APP_STORE_URL =
    "https://apps.apple.com/app/id6822991206";
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=ai.landlordops.landlordops_app";

  document.querySelectorAll("[data-store='apple']").forEach(function (el) {
    el.setAttribute("href", APP_STORE_URL);
  });
  document.querySelectorAll("[data-store='google']").forEach(function (el) {
    el.setAttribute("href", PLAY_STORE_URL);
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  els.forEach(function (el) {
    io.observe(el);
  });
})();
