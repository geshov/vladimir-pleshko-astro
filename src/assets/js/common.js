export default function () {
  return {
    init() {
      document.querySelectorAll("._prose a[href^='http']").forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    },

    scrollTo(target) {
      this.$el.blur();
      if (target.offsetTop - window.scrollY < 0) {
        target.classList.add("scroll-mt-16");
      } else {
        target.classList.remove("scroll-mt-16");
      }
      target.scrollIntoView({ behavior: "smooth" });
    },
  };
}
