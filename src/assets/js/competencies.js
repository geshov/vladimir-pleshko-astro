import anime from "animejs/lib/anime.es.js";

export default function () {
  return {
    showCompetency(el) {
      anime({
        targets: el,
        value: Number(el.dataset.value),
        easing: "easeInOutExpo",
      });
    },
  };
}
