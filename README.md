# Next-simple-app
# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
# Features

## 基础功能

1. 文件系统式路由定义。

- 支持动态路由参数。

例如：`@/pages/posts/[pid].js`。

``` js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

- 支持编程式导航跳转。

``` js
import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      Click here to read more
    </button>
  )
}
```

- 类 `<a />` 式的 `<link />` 组件。由 `next/link` 提供。
- 支持 **Shallow Routing** (在不改变路由 path 的情况下。即只改变 query 或 动态路由参数)。

1. 支持数据预取（Data-Fetching）。
2. 内建的 `css in js` 和 `css Modules`支持。

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
10. 支持定义环境变量。

- 可以在项目根目录下通过定义 `.env*` 格式文件来设置不同环境的环境变量。

`NODE_ENV=production`

.env.production.local
.env.local
.env.production
.env

`NODE_ENV=development`

.env.development.local
.env.local
.env.development
.env

`NODE_ENV=test`

.env.test.local
.env.test
.env

- 以 `NEXT_PUBLIC_`  开头的变量可以同时在服务端和客户端使用。通过 `process.env.NEXT_PUBLIC_*` 访问。不要使用结构语法。

- 也可以通过在 `next.config.js` 中配置 `env` 字段。

注：不支持不同的环境变量模式???

例如，名为 `ft` 的**生产环境**定义环境变量: `.env.ft`。

11.  `Next.js` 支持 ie11 及现代浏览器。
12.  方便在任何组件中加载第三方 scripts，使用 `next/script`。
13.  支持 API Routes。即可提供 http 服务。
14.  支持路由中间件。
15.  支持自定义 server。

## 构建相关