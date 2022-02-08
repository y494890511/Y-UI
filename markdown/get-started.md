# 快速使用

请先[安装](#/doc/install)本组件库。

### 完整引入

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import YUi from "y-ui";
import "y-ui/dist/lib/y-ui.css";

const app = createApp(App);

app.use(YUi);
app.mount("#app");
```

### 引入某个组件

```javascript
import { YButton } from "y-ui";
import "y-ui/dist/lib/y-ui.css";
```

完成引入就可以使用我提供的组件啦。

#### Vue 单文件组件

代码示例：

```html
<template>
  <y-button>按钮</y-button>
</template>
```

下一节：[Avatar 头像](#/doc/avatar)