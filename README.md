# Wiki Scripts

根据页面加载脚本

## Prepare

安装 Node.js 与 [yarn](https://yarnpkg.com/getting-started/install)

```sh
npm install -g yarn
```

初始化

```sh
yarn install
```

## Development

1. 在 `src/scripts` 目录下创建页面同名文件，如 `用户:Means88` 页面，则创建 `用户:Means88.ts`。
2. 编辑完毕以后运行 `yarn build` 编译脚本
3. 把修改提交到 GitHub
4. 刷新 Wiki 页面即可看到效果（可能需要清除浏览器缓存）
