// pages/index/SSS.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Jay: {
      name: "ZHOU JIE LUN",
      age: 40,
      songs: "晴天"
    }
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '知足'
    backgroundAudioManager.epname = '知足'
    backgroundAudioManager.singer = '五月天'
    backgroundAudioManager.coverImgUrl = 'https://nbct01.baidupcs.com/file/f91beb767bcadfd1f43c06df3658bce7?bkt=en-9917cc7abd88e3cbf2cbd547d7bf2b6c35f9a352b9ade9f0dffecb950211484aa3cc220f11c52dcf16a38144a7cfad6ce57aac3ebd384eb17e0b72b808ddb0d6&fid=3142952016-250528-583990052007511&time=1570446855&sign=FDTAXGERLQBHSKfW-DCb740ccc5511e5e8fedcff06b081203-zPtiNqZrEzL%2FeptEOIioHk%2FYofw%3D&to=67&size=19701&sta_dx=19701&sta_cs=1&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CYangquan%2CAnywhere%2C%2Cshanxi2%2Cct&ctime=1570446851&mtime=1570446851&resv0=cdnback&resv1=0&resv2=&resv3=&vuk=3142952016&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-b8b0a469ac7851d317d5dd1fc9f26bd15d443a3449382acd0f93aba73fb0cb4556108b8c566098b17d48fb417647ad745882a1f392a3fd68305a5e1275657320&sl=68616270&expires=8h&rt=pr&r=531218481&vbdid=3021043289&fin=14.png&fn=14.png&rtype=1&dp-logid=6489388105786781130&dp-callid=0.1&hps=1&tsl=200&csl=200&csign=MnFhFPxUP5MTjzVUfu9aCYXAkCM%3D&so=0&ut=6&uter=4&serv=0&uc=2135867590&ti=8fc64feff97f63c282e4b7c0cf94fcdcfbf461813dbcf3b8&by=themis'
    backgroundAudioManager.src = 'https://nj02all01.baidupcs.com/file/3255d96d346b5dfd573a88ee87c80f2f?bkt=en-038bee77e919b76a288b9e0f78ae85d974ca0d686fcbacd77b79f2e90416079f8e7fa914c98312b8&fid=3142952016-250528-419015700916803&time=1570446795&sign=FDTAXGERLQBHSKfW-DCb740ccc5511e5e8fedcff06b081203-iBuanSUvlq0mRMJmGaPhAYabScw%3D&to=69&size=8734141&sta_dx=8734141&sta_cs=2&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH%2CGuangzhou%2CAnywhere%2C%2Cshanxi2%2Cct&ctime=1570446791&mtime=1570446791&resv0=cdnback&resv1=0&resv2=&resv3=&vuk=3142952016&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-15fa67e52c4e2268ce612a716233e2f067c7f0bc71653e9b7bdd66a6c08e026a710b9bf971ed3562&sl=76480590&expires=8h&rt=pr&r=464368821&vbdid=3021043289&fin=%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%9F%A5%E8%B6%B3+%28V0%29.mp3&fn=%E4%BA%94%E6%9C%88%E5%A4%A9+-+%E7%9F%A5%E8%B6%B3+%28V0%29.mp3&rtype=1&dp-logid=6489372069120614390&dp-callid=0.1&hps=1&tsl=80&csl=80&csign=C9yzFMsIozdCMoaWKPpP7T%2BqW6o%3D&so=0&ut=6&uter=4&serv=0&uc=2135867590&ti=b473c93777ce6efcc635760fbc8febb060d6dc58198e1993&by=themis'
    backgroundAudioManager.play()  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})