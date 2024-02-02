export default function () {
  return {
    init() {
      document.querySelectorAll("._prose a[href^='http']").forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    },

    scrollTo(el) {
      this.$el.blur();
      el.scrollIntoView({ behavior: "smooth" });
    },
  };
}
