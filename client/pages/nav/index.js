//index.js
var qcloud = require("../../vendor/wafer2-client-sdk/index");
var config = require("../../config");
var util = require("../../utils/util.js");

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["主页", "微店", "个人"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    imgUrls: [
      "https://mmbiz.qpic.cn/mmbiz_jpg/czx0Yv7ibvaMlXNicQkDvx7oOs6lichAT9icHQh38R1t6YhLZd8YuRe7WRcjtMYOicBCzyXnHZq9rLYuib0xYr7PjuiaA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/czx0Yv7ibvaMJ9Lx3UibaqMGPyvqKv89fVPOKmgJvAXMaUTemiaJE0U5iavVrwpLjrINzLUaqL9FLjN5T0rL415y6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/czx0Yv7ibvaP3d9GpmbqbliaO6yAWjiayhx1Ewmk68ElLdDhzheBhVPE3ZibPFrcq0nZCW29Cn0Kx3qnWxRicaFqb4g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft:
            (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset:
            res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  previewImage: function(e) {
    wx.previewImage({
      current: [
        "http://sz800800.cn/video/test.png",
        "http://sz800800.cn/video/test.png"
      ], // 当前显示图片的http链接
      urls: [
        "http://sz800800.cn/video/test.png",
        "http://sz800800.cn/video/test.png"
      ] // 需要预览的图片http链接列表
    });
  },

  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
