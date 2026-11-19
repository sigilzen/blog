# 本机博客使用

预览：在本目录运行 `sh blog-local.sh dev`，打开终端显示的本地地址，按 Ctrl+C 停止。

生产构建：`sh blog-local.sh build`，生成文件位于 public。

本机使用 Node 24.13.1 和项目内的 Hugo Extended 0.148.2（.local-tools/bin/hugo）。依赖已通过 npm ci 按 package-lock.json 安装；如需重装，运行 `npm ci --ignore-scripts --cache /private/tmp/blog-npm-cache`。

新增 vite.config.mjs 编译主题 CSS 到 static/css，页面模板会自动引用。node_modules、public、本机 Hugo 及生成 CSS 已加入 .gitignore。

2026-10-27：原目录生产构建通过，生成 72 页面、13 分页、36 处理图片。文章未改动，尚未提交或推送 Git，也未发布站点。

Cloudflare Pages 项目为 `blog`，生产分支为 `main`。Hugo 使用 [blog.allinone.run](https://blog.allinone.run/) 生成站内链接，项目也可通过 [Pages 默认域名](https://my-blog-bwb.pages.dev/) 访问。

Git origin 地址中存在访问令牌，建议在 GitHub 撤销并改用系统凭据管理或 SSH。现有未推送提交、文件权限变化及主题子仓库差异均保留。
