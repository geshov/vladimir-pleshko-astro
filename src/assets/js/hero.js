import anime from "animejs/lib/anime.es.js";

export default function () {
  return {
    showDino1() {
      const el = this.$el;

      anime({
        targets: el,
        scale: 1,
        translateY: 0,
        duration: 2000,
        easing: "easeInOutQuad",
      });
    },

    showDino2() {
      const el = this.$el;

      anime({
        targets: el,
        opacity: [0, 1],
        translateX: [0, 3, 0, -3, 0],
        easing: "linear",
        duration: 75,
        loop: 15,
      });
    },

    showRanks() {
      const ranks = document.querySelectorAll(".rank");

      const timeline = anime.timeline({
        delay: 250,
        duration: 750,
      });

      ranks.forEach((rank) => {
        timeline.add({
          targets: rank,
          translateX: 0,
          opacity: 1,
        });
      });
    },

    showPhoto() {
      anime({
        targets: "._",
        scale: 0,
        borderRadius: "50%",
        easing: "linear",
        delay: anime.stagger(200, { grid: [10, 12], from: "center" }),
      });
    },
  };
}
