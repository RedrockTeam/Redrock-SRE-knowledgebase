import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "CS基础",
    icon: "lightbulb",
    children: [
      {
        text: "计算机组成原理",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "操作系统",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "TCP/IP协议栈",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "数据结构与算法",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
    ],
  },
  {
    text: "Linux操作系统篇",
    icon: "lightbulb",
    children: [
      {
        text: "Linux入门及相关环境配置",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux基础知识与常用命令",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux内核原理深入",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux网络原理深入",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
    ],
  },
  {
    text: "云原生技术篇",
    icon: "lightbulb",
    children: [
      {
        text: "云原生概念入门",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "容器化技术原理与实战",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "容器编排技术kubernetes",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "常用中间件",
    icon: "lightbulb",
    children: [
      {
        text: "代理服务器",
        children: [
          { text: "nginx", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "traefik", icon: "lightbulb", link: "./guide/feature/encrypt.html" }
          ],
      },
      {
        text: "分布式存储",
        children: [
          { text: "ceph", icon: "lightbulb", link: "./guide/feature/encrypt.html" }
        ]
      },
      {
        text: "数据库",
        children: [
          { text: "MYSQL", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "Redis", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "Kafka", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "Postgres", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "etcd", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          
        ]
      },
      {
        text: "消息队列",
        children: [
          { text: "RabbitMQ", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          { text: "RocketMQ", icon: "lightbulb", link: "./guide/feature/encrypt.html" },
          
        ]
      },

    ],
  },

  {
    text: "微服务与Devops",
    icon: "lightbulb",
    children: [
      {
        text: "微服务设计",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "devops设计",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "分布式代码管理git",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "软件开发流程",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "运维开发技术",
    icon: "lightbulb",
    children: [
      {
        text: "python",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "golang",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "开发场景整理",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "网络安全技术",
    icon: "lightbulb",
    children: [
      {
        text: "常见攻击原理及防范",
        icon: "lightbulb",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
]);
