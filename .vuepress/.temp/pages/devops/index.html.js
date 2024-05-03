import comp from "/home/joshua/Documents/Redrock-SRE-knowledgebase/.vuepress/.temp/pages/devops/index.html.vue"
const data = JSON.parse("{\"path\":\"/devops/\",\"title\":\"Devops\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Devops\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sre-docs.redrock.team/devops/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Redrock SRE 知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Devops\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"sre@redrock.team\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Devops\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"git\":{},\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
