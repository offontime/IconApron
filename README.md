![IconApron](./assets/images/github-logo.png)
# [IconApron](https://iconapron.offontime.com)
> under developing
current version: (vue: 1.0.3)(react: none)(vue-next: 1.0.1)(svg: none)


English | [简体中文](./README.zh-cn.md)

## Introduction
IconApron gives most useful icons in use of funplus ui. We provide crose-platform components, including `react-icons`, `vue-icons` and `svg-icons`. 

## Packages
> Generate Cross-platform Components

Find packages in `packages` folder. NPM packages make it painless to import icon components to your project.

| Name | Github Link | NPM link |
| :---- | :---- | :---- |
| React Icons | [React Component](https://github.com/offontime/IconApron/tree/master/) | [@icon-apron/react](https://www.npmjs.com/package/@icon-apron/) |
| Vue2 Icons | [Vue Component for Vue2](https://github.com/offontime/IconApron/tree/master/vue) | [@icon-apron/vue](https://www.npmjs.com/package/@icon-apron/vue) |
| Vue3 Icons | [Vue Component for Vue3](https://github.com/offontime/IconApron/tree/master/vue-next) | [@icon-apron/vue-next](https://www.npmjs.com/package/@icon-apron/vue-next) |
| SVG Icons | Pure SVG String | @iconapron/svg |

## website
Here is the website of [IconApron](https://icon.apron.design). Each icon is from svg with in a 30 x 30 grid. each icon has a default color of black(HEX #000000, RGB rgb(0, 0, 0)), but can set font color as a charactor with css(font-color).

## Usage
Icon Apron provided figma link for designers and React/Vue components for developers.

### For Designers
Everybody can view our [Figma link](https://www.figma.com/file/dWeZkVJM2ORioY2w1YTTvB/Icon-Apron?node-id=12%3A1603) to view, copy all icons.

### For developers
Install dependency via npm or yarn.

> Indeed, you should base on your project is using Vue, Vue next or React.

#### Step.1 Install Dependency
```bash
npm install @icon-apron/vue --save # Vue2 projects
npm install @icon-apron/vue-next --save # Vue3 projects
npm install @icon-apron/react --save # React projects

# you can also use yarn instead of npm
```

#### Step.2 Import Component library
> As a sample, we present a Vue2 import usage.

Vue2 project `main.js`
```javascript
import IconApron from '@iconapron/vue'
Vue.use(IconApron)
```

Vue2 project in component
```javascript
import { IconApron } from '@iconapron/vue'

export default {
  components: { IconApron }
}
```

#### Step.3 Use it in HTML or render function

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

## Change Log

[CHANGELOG](./CHANGELOG.md) | [更新日志](./CHANGELOG.zh-cn.md)

## Contact Us
Lark Group

<img src="./assets/images/lark-group-qr.png" width="400px" />

