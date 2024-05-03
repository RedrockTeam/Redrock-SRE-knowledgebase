import { defineUserConfig } from "vuepress";
import { gitPlugin } from '@vuepress/plugin-git'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Redrock SRE 知识库",
  description: "一起进入SRE的学习之路吧",

  theme,

  plugins: [
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true
    }),
  ]


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
