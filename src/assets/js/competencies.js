import anime from "animejs/lib/anime.es.js";

export default function () {
  return {
    showCompetency() {
      const el = this.$el;

      anime({
        targets: el,
        value: Number(el.dataset.value),
        easing: "easeInOutQuart",
      });
    },
  };
}
