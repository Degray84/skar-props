import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../../dist/style/index.css";

createApp(App).use(router).mount("#app");
