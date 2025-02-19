import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/tailwind.css";
import i18n from './language';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPen,
  faTrash,
  faAngleLeft,
  faAngleRight,
  faCog,
  faUser,
  faPaperPlane,
  faRedo,
  faPlus,
  faFolderOpen,
  faEnvelopeOpen,
  faRegistered,
  faEllipsis,
  faMagnifyingGlass,
  faPenToSquare,
  faBars,
  faChevronRight,
  faBoxArchive,
  faShare,
  faGlobe,
  faArrowUp,
  faChevronDown,
  faArrowUpFromBracket,
  faBuilding,
  faLayerGroup,
  faTasks,
  faRobot,
  faSlidersH,
  faUserPlus,
  faSignOutAlt,
  faVolumeUp,
  faCopy,
  faSync,
  faExchangeAlt
} from "@fortawesome/free-solid-svg-icons";

// Add new icons
library.add(
  faPen,
  faTrash,
  faAngleLeft,
  faAngleRight,
  faCog,
  faUser,
  faPaperPlane,
  faRedo,
  faPlus,
  faFolderOpen,
  faEnvelopeOpen,
  faRegistered,
  faEllipsis,
  faMagnifyingGlass,
  faPenToSquare,
  faBars,
  faChevronRight,
  faBoxArchive,
  faShare,
  faGlobe,
  faArrowUp,
  faChevronDown,
  faArrowUpFromBracket,
  faBuilding,
  faLayerGroup,
  faTasks,
  faRobot,
  faSlidersH,
  faUserPlus,
  faSignOutAlt,
  faVolumeUp,
  faCopy,
  faSync,
  faExchangeAlt
);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');
