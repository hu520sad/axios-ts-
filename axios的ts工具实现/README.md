# axios的ts工具实现

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## 项目结构

axios的ts的实现封装，使用的是vite搭建的vue的脚手架

service——core
module->网络请求模块
request->axios创建类和一些请求类型
config->BASE_URL timeout header的 创建axios实例的配置属性

实现了1.每一个instance都添加拦截器 2.针对某一个实例进行拦截追加 3.针对某一个实例的请求进行追加拦截

对返回对象类型的泛型添加

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

```

```
