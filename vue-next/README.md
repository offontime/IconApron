# @icon-apron/vue-next

> Apron Design (Vue3) 的一个分支组件，用于在页面上使用图标。



## 使用
可前往 [图标 Icon - 组件 | Apron Design for Vue3](https://vue-next.apron.design/components/icon.html) 查看。

以下是一个简单的 demo：
```vue
<script setup>
// main.ts
import IconApron from '@icon-apron/vue-next'

app.use(IconApron)
</script>

<template>
  <ap-icon name="apron-design"></ap-icon>
</template>
```

## 开发者
主程：[田昊天](https://www.mitkimi.com/about)：一个说不清是前端还是全栈的“研发人员”。

同时，我们也希望开发者们可以加入进来。

## 新功能开发：

### 步骤
1. 前往 [Github 项目主页](https://github.com/offontime/IconApron) 克隆代码。
2. 路由进 `IconApron/vue-next` 安装依赖
    ```sh
    git clone git@github.com:offontime/IconApron.git
    cd IconApron/vue-next
    yarn
    ```
3. 启动项目
    > 我们会要求您拉一个自己的开发分支，例如：`feature-xxx`，开发并调试完成新功能后向我们提交 PR
    ```sh
    git checkout -b feature-xxx
    yarn dev
    ```

### 指南
1. 本项目使用基础包 `vite-plugin-svg-icons` 版本 ^2.0.1 作为渲染工具。在后续开发中如果有实际需求，则会根据情况升级此包。
2. 脚手架使用 vite 搭建，vue3-ts 编写。
3. 参与贡献请先阅读：[参与开发](https://vue-next.apron.design/docs/developer.html) 和 [如何优雅地在 Github 上贡献代码](https://vue-next.apron.design/docs/developer.html)