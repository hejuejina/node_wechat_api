# node_wechat_api

用node开发小程序api


## 1.require-directory

[npm地址](https://www.npmjs.com/package/require-directory "npm地址")

作用：递归遍历指定的目录，require()每个文件，并返回包含这些模块的结构


使用：
```
requireDirectory (module , path, { visit:visitor })
```

将函数作为visit将添加到module.exports的每个模块调用