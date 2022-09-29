# IconApron 使用指南
> 网站地址：[icon.apron.design](https://icon.apron.design)
>
> Github 开源：[https://github.com/offontime/IconApron](https://github.com/offontime/IconApron)
>
> 建议反馈：[https://github.com/offontime/IconApron/issues](https://github.com/offontime/IconApron/issues)



## 基本介绍

[IconApron](https://icon.apron.design) 图标库提供了 funplus ui 中使用的大量图标，我们支持在跨平台导出多种图标的代码库，方面您在代码中以组件的形式按需引用，比如 `react-icons`, `vue-icons` 和 `svg-icons`。

## 写在前面
我们期待 IconApron 具有独立的、鲜明特色的设计风格，因此我们没有使用现在流行的可以在线修改图标风格的模式（字节 IconPark）或者只能复制/下载 SVG 和 png 的模式（阿里 IconFont）。我们的风格更加接近 FontAwesome 的模式。

## 目标用户
UI 设计师、前端开发同学。

## 使用场景
### UI 设计
在 Sketch/Figma/即时设计/MasterGo 等设计工具中做 UI 设计，可以很方便的使用我们的图标。首先进入官网图标库，找到需要的图标后点击图标展示卡，在弹出的抽屉中点击“复制 SVG” 按钮。相关的 SVG 图片即可复制进你的剪贴板，在你的设计工具中直接粘贴即可。

在 Figma 的使用场景中，还可以直接打开 [[Figma] IconApron Draft - icons](https://www.figma.com/file/dWeZkVJM2ORioY2w1YTTvB/Icon-Apron?node-id=12%3A1603) 找到对应的图标直接复制以使用。

### 前端开发
#### 在 Vue2.x 项目中使用
1. 安装依赖
```bash
# BASH COMMAND
npm install @icon-apron/vue
```

2. 全局注册
```javascript
// main.js
import IconApron from '@icon-apron/vue'
Vue.use(IconApron)
```

3. 在 Vue 组件中使用
```vue
<template>
  <IconApron name="star-full" />
</template>
```
#### 在 Vue3.x 项目中使用
1. 安装依赖
```bash
# BASH COMMAND
npm install @icon-apron/vue-next
```

2. 全局注册
```javascript
// main.js
import IconApron from '@icon-apron/vue-next'
Vue.use(IconApron)
```

3. 在 Vue Next 组件中使用
```vue
<template>
  <IconApron name="star-full" />
</template>
```

#### 在 React 中使用
1. 安装依赖
```bash
# BASH COMMAND
npm install @icon-apron/react
```

2. 在 react 组件中引用和使用
```javascript
import React from 'react'
import IconApron from '@icon-apron/react'

export class App extends React.Component {
  render () {
    return (
      <div>
        <IconApron name='star-full' />
      </div>
    )
  }
}
```

#### 在其他技术架构下使用（例如 Taro/uniapp 等）
1. 在 [图标库](/icons) 中找到合适的图标；
2. 点击图标展示卡，在右侧展开的抽屉中点击“下载 svg”按钮，并且将图标存放在指定位置；
3. 在项目中使用 Image 标签以图片的形式引用。

## 常见问题
### IconApron 免费吗？
> 是的，完全不要钱。

### 图标库找不到图标怎么办？
> 访问 [Github Issue](https://github.com/offontime/IconApron/issues) 向我们提需求，然后我们收到后会尽快绘制。一般情况下我们会在每周三处理完之前提出的图标需求的绘制，经过一天多的绘制，每周五下午 5 点之前会做一次图标库的更新。

### 能参与共建吗？
> 当然，欢迎，您可以在意见反馈的渠道中向我们提出共建的想法。我们的组员会与您取得联系。

### IconApron 有多少图标？
> 目前是 200 多个。而且在逐步的更新。

### 与阿里的 IconFont 和字节的 IconPark 有什么区别？
> IconFont 图标数量很丰富，支持上传图标和项目管理。IconPark 是规范化统一的图标库。
> IconApron 是相对独立的图标设计，是使用字体设计的，因此可以使用 css 的 color 属性进行颜色的设置。

### 如何优雅的进行技术共建
> IconApron 在设计之初就是开源使用的，因此无论你是谁，在哪儿，都欢迎成为 IconApron 的技术共建者。
> IconApron 全线使用 JavaScript 编写，使用 eslint-standard 规范。如果您想要参与共建，也请使用这样的规范。
> 在 Github 上以 master 分支进行代码克隆，并且单独拉一个分支进行你的代码编写，最后向 develop 分支提交 PR 的方式是我们推荐的贡献代码的方式。


## 相关链接
欢迎大家体验和交流

- Github 地址：[https://github.com/offontime/IconApron](https://github.com/offontime/IconApron)
- npm 包
  - [@icon-apron/react](https://www.npmjs.com/package/@icon-apron/react)
  - [@icon-apron/vue](https://www.npmjs.com/package/@icon-apron/vue)
  - [@icon-apron/vue-next](https://www.npmjs.com/package/@icon-apron/vue-next)

## 建议反馈
### github
[https://github.com/offontime/IconApron/issues](https://github.com/offontime/IconApron/issues)

### 飞书
<img src="https://github.com/offontime/IconApron/raw/master/assets/images/lark-group-qr.png" width="400px" />

## 更新日志
[CHANGELOG](https://github.com/offontime/IconApron/blob/master/CHANGELOG.md) ｜ [更新日志](https://github.com/offontime/IconApron/blob/master/CHANGELOG.zh-cn.md)