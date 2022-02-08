/*
 * @Description: 
 * @Author: yinlele
 * @Date: 2022-02-08 10:20:05
 * @LastEditTime: 2022-02-08 10:21:25
 * @LastEditors: yinlele
 * @FilePath: /y-ui/src/lib/index.ts
 */
import { App } from "vue";
import YButton from "./button/index.vue";
// import JwSwitch from "./switch/index.vue";
// import JwTabs from "./tabs/index.vue";
// import JwTab from "./tab/index.vue";
// import JwDialog from "./dialog/index.vue";
// import JwAvatar from "./avatar/index.vue";
// import JwIcon from "./icon/index.vue";
// import JwEllipsis from "./ellipsis/index.vue";
// import JwLink from "./link/index.vue";
// import JwRadio from "./radio/radio.vue";
// import JwRadioGroup from "./radio/radio-group.vue";
// import JwCheckbox from "./checkbox/checkbox.vue";
// import JwCheckboxGroup from "./checkbox/checkbox-group.vue";
// import { openDialog } from "./dialog/openDialog";

export {
  YButton,
  // JwSwitch,
  // JwTabs,
  // JwTab,
  // JwDialog,
  // JwAvatar,
  // JwIcon,
  // JwEllipsis,
  // JwRadio,
  // openDialog,
  // JwRadioGroup,
  // JwCheckbox,
  // JwCheckboxGroup
};

const components = [
  YButton,
//   JwSwitch,
//   JwTabs,
//   JwTab,
//   JwDialog,
//   JwIcon,
//   JwAvatar,
//   JwEllipsis,
//   JwLink,
//   JwRadio,
//   JwRadioGroup,
//   JwCheckbox,
//   JwCheckboxGroup
];

export function registerYUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerYUi;