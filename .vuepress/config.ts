import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Redrock SRE 知识库",
  description: "让我们一起学习SRE知识！",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
