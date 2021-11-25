# wheels-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### fa icon

* 安装基础依赖库。
```powershell
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/vue-fontawesome
```
* 安装样式依赖
```powershell
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

* 修改 src/main.js
```js
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
 from '@fortawesome/vue-fontawesome'
 
library.add(fas, far, fab)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

```

* usage

```html
<font-awesome-icon :icon="['fas', 'square']" />
<!-- 如果是 solid 样式（前缀为：fas），则前缀可以省略。 -->
<font-awesome-icon icon="square" />
<font-awesome-icon :icon="['far', 'square']" />
<font-awesome-icon :icon="['fab', 'accessible-icon']" />
```
*Attribute

  * size: [xs ,lg , 2x]

  * fixed-width: 固定宽度

  * rotation: [0, 45, 90 ...]旋转移动角度

  * flip: ['horizontal', 'vertical', 'both']翻转

  * spin: 匀速旋转， pulse: 非匀速旋转

  * pull: ['left', 'right']: 图标居左/居右

  * mask: ['circle', 'square']: 圆形/方形遮罩

  * transform: ['strink-6', 'left-4'... ,{rotate:45}]:['缩小6','左移4',...,'旋转45',]

* 组合使用

  * 图标与图标
    ```html
    <font-awesome-layers class="fa-lg">
        <font-awesome-icon icon="circle" style="color: green;"/>
        <font-awesome-icon icon="check" transform="shrink-6" style="color: white;" />
    </font-awesome-layers>
    ```

  * 图标与文字
    ```html
    <font-awesome-layers full-width class="fa-4x">
        <font-awesome-icon icon="star"/>
        <font-awesome-layers-text transform="down-1 right-1 shrink-14" value="hangge" style="color:white" />
    </font-awesome-layers>
    ```

参考链接： https://www.hangge.com/blog/cache/detail_2104.html

https://phoeon.gitee.io/free-ui/demo/#/test3-3