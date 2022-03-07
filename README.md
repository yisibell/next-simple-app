# Next-simple-app
# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
# Features

1. 文件系统式路由定义。
2. 支持数据预取（Data-Fetching）。
3. 内建的 `css in js` 和 `css Modules`支持。

- `css in js` 解决方案：<a href="https://github.com/vercel/styled-jsx">styled-jsx</a>。
- `css Modules` 支持 `sass`。

4. 支持布局（Layout）。

`@/layouts/*`。每个页面可以定义自己的布局组件，当不进行定义时，可以默认使用 `@/layouts/default` 组件。

5. 图片优化。

可使用 `next/image` 组件进行图片资源的优化。

6. 支持自定义 **Document**。
7. 内置字体资源优化。
8. 静态资源文件夹 `public`。

无需构建的静态资源可以放置在 `public` 文件夹下。然后这样使用 `/me.png`。

9. 支持 eslint + prettier。