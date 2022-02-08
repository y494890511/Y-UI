/*
 * @Description: 路由
 * @Author: yinlele
 * @Date: 2022-02-07 18:20:58
 * @LastEditTime: 2022-02-07 19:18:33
 * @LastEditors: yinlele
 * @FilePath: /y-ui/src/router/index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import Demo from "@/views/demo.vue";
import { docRoutes } from "./doc-routes";

const history = createWebHashHistory();


const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/demo", component: Demo },
    { path: "/home", component: Home },
    {
      path: "/doc",
      redirect: "/doc/intro",
      component: Doc,
      children: docRoutes,
    },
  ],
});

export default router;