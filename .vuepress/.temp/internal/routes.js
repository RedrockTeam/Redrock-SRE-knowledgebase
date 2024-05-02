export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/linux/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/index.html.js"), meta: {"t":"二. IaaS运维篇简介"} }],
  ["/linux/env-conf/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/env-conf/index.html.js"), meta: {"t":"入门需要进行哪些环境配置","O":1} }],
  ["/linux/linux-base/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/linux-base/index.html.js"), meta: {"t":"服务器运维篇简介","O":2} }],
  ["/linux/linux-base/linux-concepts/how-to-learn-linux.html", { loader: () => import(/* webpackChunkName: "how-to-learn-linux.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/linux-base/linux-concepts/how-to-learn-linux.html.js"), meta: {"t":"如何学习Linux","O":1} }],
  ["/linux/linux-base/linux-concepts/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/linux-base/linux-concepts/index.html.js"), meta: {"t":"Linux简介","O":1} }],
  ["/linux/linux-base/linux-concepts/what-is-linux.html", { loader: () => import(/* webpackChunkName: "what-is-linux.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/linux-base/linux-concepts/what-is-linux.html.js"), meta: {"t":"介绍什么是linux","O":null} }],
  ["/linux/linux-base/server-concepts/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/linux/linux-base/server-concepts/index.html.js"), meta: {"t":"","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/sisuh/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
