# 仿网易云音乐移动端

闲暇时的练手项目。

因为接口稳定，准备长期慢慢完善，目前实现功能不多。

## 技术栈

- Vue
- Vuex
- Vue-Router
- WebPack4.7
- Axios
- Vant UI

## 后端接口

```bash
# 下载后端项目
git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

# 安装依赖
npm install

# 启动项目
node app.js
```

## 安装

``` bash
# 安装依赖
npm install

# 开启本地服务运行项目
npm run dev

```

## 部分截图

![](https://github.com/dibiaoi/Imgs/raw/main/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%A7%BB%E5%8A%A8%E7%AB%AF/image-20220222190251625.png)

![](https://github.com/dibiaoi/Imgs/raw/main/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%A7%BB%E5%8A%A8%E7%AB%AF/image-20220222192528846.png)

![](https://github.com/dibiaoi/Imgs/raw/main/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%A7%BB%E5%8A%A8%E7%AB%AF/image-20220222192632868.png)

![](https://github.com/dibiaoi/Imgs/raw/main/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%A7%BB%E5%8A%A8%E7%AB%AF/image-20220222192655830.png)

![](https://github.com/dibiaoi/Imgs/raw/main/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%A7%BB%E5%8A%A8%E7%AB%AF/image-20220222192733614.png)

## 项目布局

```
.src
+-- api
|   +-- api.js // 存api
|   +-- index.js // api请求方法
+-- assets
|   +-- img // 图片资源
|   +-- js // iconfont资源
|   +-- styles //样式
|   +-- country_tel_list.js //国家列表
+-- components // 小组件
|   +-- base  //  公用基础组件
|   +-- find // 发现页模块组件  
+-- plugins // 一些工具
|   +-- vant.js // 局部引入vant
+-- pages // 项目路由页面
+-- router // 路由配置
|   +-- modules //路由子模块
|   	+-- userRouters.js //用户router
|   +-- index
+-- store // vuex 配置使用
|   +-- user // 用户模块
|   	+-- userInfo.js 
|   +-- index // 组装模块并导出
|   +-- permissionMethods.js // 路由权限的一些方法
|   +-- play.js // 音乐播放的一些方法
+-- views // 视图  
|   +-- base
|   	+-- player.vue
|   	+-- songsList.vue
|   +-- find
|   	+-- components
|   		+-- FindContainer.vue
|   	+-- find.vue
|   +-- login
|   	+-- login.vue
|   	+-- loginPhoneNum.vue
|   +-- user
|   +-- 404.vue
+-- App.vue
+-- main.js
+-- permission.js //路由权限
```



