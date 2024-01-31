import anime from "animejs/lib/anime.es.js";

export default function () {
  return {
    showRanks() {
      const ranks = document.querySelectorAll(".rank");

      const timeline = anime.timeline({
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
        targets: ".cover",
        opacity: 0,
        easing: "linear",
        delay: 250,
        duration: 500,
      });

      anime({
        targets: "._",
        scale: 0,
        borderRadius: "50%",
        easing: "linear",
        duration: 2500,
      });
    },
  };
}
