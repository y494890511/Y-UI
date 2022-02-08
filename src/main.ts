import { createApp } from 'vue'
// import YUi from "./lib/index";
import YUi from "@/lib/index";
import "@/lib/yUi.scss";
import "@/assets/css/index.scss";
import "github-markdown-css";

import App from './App.vue'
import router from './router'


const app = createApp(App);
app.use(router);
app.use(YUi);
app.mount('#app');
