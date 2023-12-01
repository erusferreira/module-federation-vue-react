import { createApp } from "vue";

import Header from "./Header.vue";

export default function placeHeader(element) {
  createApp(Header).mount(element);
}

