# form-create-designer-tdesign

**这个是 Vue3 版本**

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/riluocanyang/form-create-designer-tdesign)
[![github](https://img.shields.io/badge/Author-sx-code-blue.svg)](https://github.com/riluocanyang)

**form-create-designer-tdesign 是基于 [@form-create/tdesign](https://github.com/xaboy/form-create) vue3版本实现的表单设计器组件。可以通过拖拽的方式快速创建表单，提高开发者对表单的开发效率，节省开发者的时间。**

**本项目基于 [form-create-designer-naiveui](https://github.com/SX-Code/form-designer-naiveui) 这个项目开发 ，将UI框架更改为 [TDesign] (https://tdesign.tencent.com/) ，做出的更改如下：**
- Naive UI v2.34.3 -> TDesign

**[form-create-designer](https://github.com/xaboy/form-create) 是基于 [@form-create/element-ui](https://github.com/xaboy/form-create) 开发的表单设计器。**

**[form-create-designer-naiveui](https://github.com/SX-Code/form-designer-naiveui) 是基于 [@form-create/naive-ui](https://github.com/xaboy/form-create) vue3版本实现的表单设计器组件。**



**[文档](http://designer.form-create.com/guide/)  | [form-create 文档](http://form-create.com/v3/guide/)**

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！本项目可继续完善,如有任何建议或问题[请在这里提出](https://github.com/riluocanyang/form-create-designer-tdesign/issues)



## 引入

**NodeJs:**

```shell
npm i form-create-designer-tdesign
```

请自行导入`TDesign`并挂载

```js
import formCreate from '@form-create/tdesign'
import FcDesigner  from 'form-create-designer-tdesign'

app.use(formCreate)
app.use(FcDesigner)
```

## 使用

```html
<fc-designer ref="designer"/>
```

## 组件`props`

- **menu**`MenuList` 重新配置拖拽的组件

- **height**`int|string` 设计器组件高度, 默认`100%`

- **locale**`object` 设置多语言

- **config**`Config` 设置多语言

- **mask** `boolean` 设置拖拽表单中的组件是否可以操作

## 组件方法

- 获取当前生成表单的生成规则

    ```ts
    type getRule = () => Rule[]
    ```
  **示例: `this.$refs.designer.getRule()`**

- 获取当前表单的全局配置

    ```ts
    type getOption = () => Object
    ```

- 设置当前生成表单的规则

    ```ts
    type setRule = (rules: Rule[]) => void;
    ```

- 设置当前表单的全局配置

    ```ts
    type setOption = (option: Object) => void;
    ```

- 增加一组拖拽组件

    ```ts
    type addMenu = (menu: Menu) => void;
    ```
- 删除一组拖拽组件

    ```ts
    type removeMenu = (name: string) => void;
    ```

- 批量覆盖插入拖拽组件

    ```ts
    type setMenuItem = (name: string, items: MenuItem[]) => void;
    ```

- 插入一个拖拽组件到分组

    ```ts
    type appendMenuItem = (name:string, item: MenuItem) => void;
    ```

- 删除一个拖拽组件

    ```ts
    type removeMenuItem = (item: string | MenuItem) => void;
    ```

- 新增一个拖拽组件的生成规则

    ```ts
    type addComponent = (item: DragRule) => void;
    ```
> **提示! 内置的三个组件分组`name`分别为: `main`,`aide`,`layout`**


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present xaboy

## 一些注意事项
```javascript
export default {
  name: customName, // 唯一标识
  rule({ t }) {
    const opt = t('props.option');
    return {
      // ...,
      props: { // 在初始生效的属性
        options: [1, 2].map(value => {
          return {
            label: opt + value,
            value,
            children: [],
          }
        }),
        multiple: true,
        checkStrictly: true,
        keys: {
          label: 'deptName',
          value: 'deptId',
          children: 'children'
        }
      }
    };
  },
  props(_, { t }) {  // 更新属性
    return localeProps(t, name + '.props', [
        // ...,
      {
        type: 'Fetch', 
        field: 'formCreateEffect>fetch', 
        title: '接口数据',
        props: {
            to: 'props.options', // 这里取决于options位置，有的是props.options,有的是options
            defaultValue: { // 默认值
                action: "/authService/sys-dept/allDeptTree",
                method: "POST",
            }
        },
      },
    ]);
  }
};
```

* 如果需要在初始时，就想让某个属性生效，需要找到当前组件的rule文件，在export default的rule里面设置props，详见rule/custom/dept.js 组件。
* 接口调用的Fetch组件，数据关联（TDesign组件的options）是通过 props.to 属性控制的，取决于rule中如何配置options，有的options 放在了props里，则Fetch的props.to为props.options，有的和props同级，则Fetch的props.to为options。（比如custom的dept 和 user 中options区别）。
* defaultValue 为 通过props传过来的值，modelValue 是当前值，需要通过$emit触发。详见 components/CustomDefaultValue.vue 组件。

