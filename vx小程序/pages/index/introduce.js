// pages/index/introduce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    JJ: {
      name: "LIN JUN JIE",
      age: 38,
      songs: "江南"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '将故事写成我们' 
    backgroundAudioManager.epname = '将故事写成我们'
    backgroundAudioManager.singer = '林俊杰'
    backgroundAudioManager.coverImgUrl = 'https://nbct01.baidupcs.com/file/f91beb767bcadfd1f43c06df3658bce7?bkt=en-9917cc7abd88e3cbf2cbd547d7bf2b6c35f9a352b9ade9f0dffecb950211484aa3cc220f11c52dcf16a38144a7cfad6ce57aac3ebd384eb17e0b72b808ddb0d6&fid=3142952016-250528-583990052007511&time=1570446855&sign=FDTAXGERLQBHSKfW-DCb740ccc5511e5e8fedcff06b081203-zPtiNqZrEzL%2FeptEOIioHk%2FYofw%3D&to=67&size=19701&sta_dx=19701&sta_cs=1&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CYangquan%2CAnywhere%2C%2Cshanxi2%2Cct&ctime=1570446851&mtime=1570446851&resv0=cdnback&resv1=0&resv2=&resv3=&vuk=3142952016&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-b8b0a469ac7851d317d5dd1fc9f26bd15d443a3449382acd0f93aba73fb0cb4556108b8c566098b17d48fb417647ad745882a1f392a3fd68305a5e1275657320&sl=68616270&expires=8h&rt=pr&r=531218481&vbdid=3021043289&fin=14.png&fn=14.png&rtype=1&dp-logid=6489388105786781130&dp-callid=0.1&hps=1&tsl=200&csl=200&csign=MnFhFPxUP5MTjzVUfu9aCYXAkCM%3D&so=0&ut=6&uter=4&serv=0&uc=2135867590&ti=8fc64feff97f63c282e4b7c0cf94fcdcfbf461813dbcf3b8&by=themis'
    backgroundAudioManager.src = 'https://qdct01.baidupcs.com/file/f10024b0b1ccb251cfef86b55b3c0937?bkt=en-c58a217c5b5bf7b21d15893129d3cfdf4fcc3a437603baed45d26ee22f4df409e1161696c0536213&fid=3142952016-250528-91729157756219&time=1570446732&sign=FDTAXGERLQBHSKfW-DCb740ccc5511e5e8fedcff06b081203-vfDJxx1H%2BigkZ%2F8uA6VOTFrQKLM%3D&to=90&size=11784622&sta_dx=11784622&sta_cs=18&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH%2CQingdao%2CAnywhere%2C%2Cshanxi2%2Cct&ctime=1570446726&mtime=1570446726&resv0=cdnback&resv1=0&resv2=&resv3=&vuk=3142952016&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-80df0fe68892c494e9315c9b9aac6664f77a53f8bd5749bcceda3f5e00543793aa9f63937d78fb72&sl=76480590&expires=8h&rt=pr&r=385371704&vbdid=3021043289&fin=%E6%9E%97%E4%BF%8A%E6%9D%B0+-+%E5%B0%86%E6%95%85%E4%BA%8B%E5%86%99%E6%88%90%E6%88%91%E4%BB%AC+%28V0%29.mp3&fn=%E6%9E%97%E4%BF%8A%E6%9D%B0+-+%E5%B0%86%E6%95%85%E4%BA%8B%E5%86%99%E6%88%90%E6%88%91%E4%BB%AC+%28V0%29.mp3&rtype=1&dp-logid=6489355114994552360&dp-callid=0.1&hps=1&tsl=80&csl=80&csign=C9yzFMsIozdCMoaWKPpP7T%2BqW6o%3D&so=0&ut=6&uter=4&serv=0&uc=2135867590&ti=51702cd94a4865ee546e5e8196847a0e9b9b1a1bea8bc125&by=themis'
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
console.log(Page.data)

