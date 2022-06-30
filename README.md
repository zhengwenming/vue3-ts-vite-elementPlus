# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## About build package size

1、不添加element-plus                  打包大小：365kb
2、全局引入element-plus                打包大小：1.4MB
3、按需引入element-plus（4-6个组件）     打包大小：438kb
4、按需引入element-plus/icons-vue（2-3个组件）     打包大小：442kb



## About element-plus-icon的按需导入
1、配置好按需导入，直接使用
 <el-icon :size="20"><i-carbon-accessibility /></el-icon>
     <el-icon :size="20"><i-ic-baseline-5g /></el-icon>
      <el-icon :size="20"><i-line-md-arrow-align-top /></el-icon>

2、引入组件，直接使用引入后的组件
 import IconBaseline5g from '~icons/ic/baseline-5g'
 import ArrowAlignTop from '~icons/line-md/arrow-align-top'


<IconBaseline5g />

 <el-icon :size="88" color="red">
       <ArrowAlignTop/>
    </el-icon>



##参考文章

1、Vue3 ElementPlus 更加优雅的使用Icon https://crmeb.blog.csdn.net/article/details/123245221
2、iconify地址 https://icon-sets.iconify.design

3、report.html打包分析   https://segmentfault.com/a/1190000041564306

4、vue3按需使用Element Plus的icon https://www.cnblogs.com/lovewhatIlove/p/16390357.html