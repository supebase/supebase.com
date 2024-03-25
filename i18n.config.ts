export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zhCN",
  messages: {
    zhCN: {
      common: {
        header: {
          login: "登录",
          confirm: "确定",
          cancel: "取消",
          write: "撰写"
        },
        timeAgo: {
          "just-now": "刚刚",
          ago: "{0}前",
          in: "{0}后",
          "last-month": "上个月",
          "next-month": "下个月",
          month: "个月",
          "last-year": "去年",
          "next-year": "明年",
          year: "年",
          yesterday: "昨天",
          tomorrow: "明天",
          day: "天",
          "last-week": "上周",
          "next-week": "下周",
          week: "周",
          hour: "小时",
          minute: "分钟",
          second: "秒钟",
        },
      },
      "Failed to fetch": "无法获取数据",
      "Invalid arguments": "参数无效",
    },
    enUS: {},
  },
}));
