import { createApp } from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashCan,
  faCalendarPlus,
  faXmark,
  faAngleLeft,
  faAnglesLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrashCan,
  faCalendarPlus,
  faXmark,
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
