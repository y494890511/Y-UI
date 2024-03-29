/*
 * @Description: 
 * @Author: yinlele
 * @Date: 2022-02-07 18:47:09
 * @LastEditTime: 2022-02-07 19:27:40
 * @LastEditors: yinlele
 * @FilePath: /y-ui/src/router/doc-routes.ts
 */
import { h } from "vue";
import Markdown from "@/components/Markdown.vue";
import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (str: string) => h(Markdown, { content: str, key: str });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);

// import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
// import DialogDoc from "@/views/doc/dialog/index.vue";
// import TabsDoc from "@/views/doc/tabs/index.vue";
// import AvatarDoc from "@/views/doc/avatar/index.vue";
// import IconDoc from "@/views/doc/icon/index.vue";
// import EllipsisDoc from "@/views/doc/ellipsis/index.vue";
// import LinkDoc from "@/views/doc/link/index.vue";
// import RadioDoc from "@/views/doc/radio/index.vue";
// import CheckboxDoc from "@/views/doc/checkbox/index.vue";

const docMenus = {
  文档: [
    { path: "intro", component: IntroDoc, name: "介绍" },
    { path: "install", component: InstallDoc, name: "安装" },
    { path: "get-started", component: GetStartedDoc, name: "快速使用" },
  ],
  通用组件: [
    // { path: "avatar", component: AvatarDoc, name: "头像 Avatar" },
    { path: "button", component: ButtonDoc, name: "按钮 Button" },
    // { path: "ellipsis", component: EllipsisDoc, name: "文本省略 Ellipsis" },
    // { path: "icon", component: IconDoc, name: "图标 Icon" },
    // { path: "link", component: LinkDoc, name: "链接 Link" },
  ],
  数据录入组件: [
    // { path: "checkbox", component: CheckboxDoc, name: "复选框 Checkbox" },
    // { path: "radio", component: RadioDoc, name: "单选框 Radio" },
    // { path: "switch", component: SwitchDoc, name: "开关 Switch" },
  ],
  // 反馈组件: [{ path: "dialog", component: DialogDoc, name: "对话框 Dialog" }],
  // 导航组件: [{ path: "tabs", component: TabsDoc, name: "标签页 Tabs" }],
};

let docRoutes = [];
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]];
}

export { docRoutes, docMenus };