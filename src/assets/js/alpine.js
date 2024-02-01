import intersect from "@alpinejs/intersect";

import common from "./common";
import hero from "./hero";

export default (Alpine) => {
  Alpine.plugin(intersect);

  Alpine.data("common", common);
  Alpine.data("hero", hero);
};
