import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "/assets/icon/home.svg",
    link: "/", 
  },
  {
    text: "CS基础",
    icon: "/assets/icon/computer-dev.svg",
    children: [
      {
        text: "计算机组成原理",
        icon: "/assets/icon/cpu.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "操作系统",
        icon: "/assets/icon/os.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "TCP/IP协议栈",
        icon: "/assets/icon/internet.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "数据结构与算法",
        icon: "/assets/icon/datastructure.svg",
        link: "/iaas-base/network-engineer/"
      },
    ],
  },
  {
    text: "Linux操作系统篇",
    icon: "/assets/icon/linux.svg",
    children: [
      {
        text: "Linux入门及相关环境配置",
        icon: "/assets/icon/entry.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux基础知识与常用命令",
        icon: "/assets/icon/shell.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux内核原理深入",
        icon: "/assets/icon/linux-core.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "Linux网络原理深入",
        icon: "/assets/icon/linux-network.svg",
        link: "/iaas-base/network-engineer/"
      },
    ],
  },
  {
    text: "云原生技术篇",
    icon: "/assets/icon/cloud-native.svg",
    children: [
      {
        text: "云原生概念入门",
        icon: "/assets/icon/entry.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "容器化技术原理与实战",
        icon: "/assets/icon/docker.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "容器编排技术kubernetes",
        icon: "/assets/icon/k8s.svg",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "常用中间件",
    icon: "/assets/icon/middleware.svg",
    children: [
      {
        text: "代理服务器",
        children: [
          { text: "nginx", icon: "/assets/icon/nginx.svg", link: "./guide/feature/encrypt.html" },
          { text: "traefik", icon: "/assets/icon/traefik.svg", link: "./guide/feature/encrypt.html" }
          ],
      },
      {
        text: "分布式存储",
        children: [
          { text: "ceph", icon: "/assets/icon/ceph.svg", link: "./guide/feature/encrypt.html" }
        ]
      },
      {
        text: "数据库",
        children: [
          { text: "MYSQL", icon: "/assets/icon/mysql.svg", link: "./guide/feature/encrypt.html" },
          { text: "Redis", icon: "/assets/icon/redis.svg", link: "./guide/feature/encrypt.html" },
          { text: "Kafka", icon: "/assets/icon/kafka.svg", link: "./guide/feature/encrypt.html" },
          { text: "Postgres", icon: "/assets/icon/postgresql.svg", link: "./guide/feature/encrypt.html" },
          { text: "etcd", icon: "/assets/icon/etcd.svg", link: "./guide/feature/encrypt.html" },
          
        ]
      },
      {
        text: "消息队列",
        children: [
          { text: "RabbitMQ", icon: "/assets/icon/rabbitmq.svg", link: "./guide/feature/encrypt.html" },
          { text: "RocketMQ", icon: "/assets/icon/rocketmq.svg", link: "./guide/feature/encrypt.html" },
          
        ]
      },

    ],
  },

  {
    text: "微服务与Devops",
    icon: "/assets/icon/microservice.svg",
    children: [
      {
        text: "微服务设计",
        icon: "/assets/icon/microservice1.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "devops设计",
        icon: "/assets/icon/devops.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "分布式代码管理git",
        icon: "/assets/icon/git.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "软件开发流程",
        icon: "/assets/icon/progress.svg",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "运维开发技术",
    icon: "/assets/icon/dev.svg",
    children: [
      {
        text: "python",
        icon: "/assets/icon/python.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "golang",
        icon: "/assets/icon/golang.svg",
        link: "/iaas-base/network-engineer/"
      },
      {
        text: "开发场景整理",
        icon: "/assets/icon/case.svg",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
  {
    text: "网络安全技术",
    icon: "/assets/icon/secure.svg",
    children: [
      {
        text: "常见攻击原理及防范",
        icon: "/assets/icon/network-attack.svg",
        link: "/iaas-base/network-engineer/"
      },

    ],
  },
]);
