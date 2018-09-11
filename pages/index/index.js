//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      indicatorDots: true,
      imgUrls: [
        "https://lionynn.cn/images/001.jpg",
        "https://lionynn.cn/images/002.jpg",
        "https://lionynn.cn/images/003.jpg"
      ]
  },
  //事件处理函数
  onShareAppMessage() {
    return {
      title: 'Some Of Ourself',
      path: 'pages/index/index'
    }
  }
})
