# DVA-UMI
1.0版本
<img src="./src/assets/a.png"/>
## 版本更新
### 2018.03.24
- 1.更新umi1.1.1
- 2.增加嵌套路由demo
## 开发构建

### 目录结构

```bash
├── /mock/           # 数据mock
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /pages/        # 页面
│ │ └── /user/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── page.js       
│ │   └── page.less 
│ │ └── /formDemo/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── index.js       
│ │   └── index.less
│ │ └── /table/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── index.js       
│ │   └── index.less    
│ ├── /models/       # 全局数据模型(默认加载)
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── global.css(.less) #全局样式文件     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
```
### 模型规则(未实现)
1. src/models/**/*.js 为 global model
2. src/pages/**/models/**/*.js 为 page model
3. global model 全量载入，page model 在 production 时按需载入，在 development 时全量载入
4. page model 为 page js 所在路径下 models/**/*.js 的文件
5. page model 要向上查找，比如 page js 为 pages/a/b.js，他的 page model 为 pages/a/b/models/**/*.js + pages/a/models/**/*.js，依次类推
6. 约定 model.js 为单文件 model，解决只有一个 model 时不需要建 models 目录的问题，有 model.js 则不去找 models/**/*.js
7. maybe: 支持合并 model 和 component 的请求，避免文件过于细碎
### 快速开始

克隆项目文件:

## Usage

```bash
$ git clone https://github.com/sonsyguy/mock-table-list-card.git
$ cd dva-umi
$ npm install
$ npm start         # visit http://localhost:8000
```

Build.

```bash
$ npm run build
```