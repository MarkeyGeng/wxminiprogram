//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    
    array: [{
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }],
  },
  
  bindJJ:function(){
    wx.navigateTo({
      url: '/pages/index/A?S='+(0)
    })
  },
  bindJay: function () {
    wx.navigateTo({
      url: '/pages/index/B?S='+(0)
    })
  }
})    
