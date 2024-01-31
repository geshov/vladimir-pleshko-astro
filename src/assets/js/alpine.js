import intersect from "@alpinejs/intersect";

import hero from "./hero";

export default (Alpine) => {
  Alpine.plugin(intersect);

  Alpine.data("hero", hero);
};
