![IconApron](./assets/images/github-logo.png)
# [IconApron](https://iconapron.offontime.com)
> 正在开发
当前版本: (vue: 1.0.2)(react: 无)(vue-next: 无)(svg: 无)

[English](./README.md) | 简体中文

## 简介
IconApron 提供了 funplus ui 中使用的大量图标. 我们支持在跨平台中到处多种图标的代码库，方便您在代码中以组件形式按需引用，比如 `react-icons`, `vue-icons` 和 `svg-icons`. 

## 代码库
> 多种代码包

您可以在 `packages` 目录下找到，以及在 `npmjs.com` 上直接安装

| 名称 | Github 地址 | NPM 包地址 |
| :---- | :---- | :---- |
| React Icons | React Component | @IconApron/react |
| Vue2 Icons | [Vue Component for Vue2](https://github.com/offontime/IconApron/tree/master/vue) | [@icon-apron/vue](https://www.npmjs.com/package/@icon-apron/vue) |
| Vue3 Icons | [Vue Component for Vue3](https://github.com/offontime/IconApron/tree/master/vue-next) | [@icon-apron/vue-next](https://www.npmjs.com/package/@icon-apron/vue-next) |
| SVG Icons | Pure SVG String | @IconApron/svg |

## 网站
访问 IconApron 官方网站：[IconApron](https://icon.apron.design). 每个图标都在一个 30 x 30 的方格内，默认颜色为纯黑（HEX #000000, RGB rgb(0, 0, 0)）。由于使用字体设置图标，因此每个图标都可以使用 css 的 font-color 属性设置颜色。

## 用法
IconApron 为设计师提供了 figma 链接，为工程师提供了 React/Vue 的组件

### 设计师
点击 [Figma link](https://www.figma.com/file/dWeZkVJM2ORioY2w1YTTvB/Icon-Apron?node-id=12%3A1603) 查看或复制所有的图标到自己的画板。

### 工程师
使用 npm 或者 yarn 安装依赖

> 开发者应该根据自己项目使用的框架选择安装的包

#### Step.1 安装依赖
```bash
npm install @icon-apron/vue --save # Vue2 projects
npm install @icon-apron/vue-next --save # Vue3 projects
npm install @icon-apron/react --save # React projects

# you can also use yarn instead of npm
```

#### Step.2 引用组件
> 这里使用 Vue2 为例做引用的演示

Vue2 project `main.js`
```javascript
import { IconApron } from '@iconapron/vue'
Vue.use(IconApron)
```

Vue2 project in component
```javascript
import { IconApron } from '@iconapron/vue'

export default {
  components: { IconApron }
}
```

#### Step.3 在 HTML 或者渲染函数中使用

Vue html
```html
<IconApron name="icon-apron" />
```

React render function
```javascript
// ... some codes ...
render () {
  return (
    <div>
      <IconApron name='icon-apron' />
    </div>
  )
}
// ... some codes ...
```

## 更新日志

[CHANGELOG](./CHANGELOG.md) | [更新日志](./CHANGELOG.zh-cn.md)

## 联系我们
飞书群

<img src="./assets/images/lark-group-qr.png" width="400px" />

