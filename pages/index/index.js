//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/img/banner001.png',
      '/img/banner002.jpg',
      '/img/banner003.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      { img: '/img/pro_01.jpg', title: '标题一', text:'描述部分描述部分描述部分'},
      { img: '/img/pro_01.jpg', title: '标题二', text: '描述部分描述部分描述部分' },
      { img: '/img/pro_01.jpg', title: '标题三', text: '描述部分描述部分描述部分' },
    ]
  },
  toDetail:function(e){
    console.log(e);
    console.log(e.currentTarget.dataset.item);
    var proList = e.currentTarget.dataset.item;
    wx.setStorage({
      key: 'text',
      data: proList.text,
    })
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + proList.title,
    })
  },
  postProList:function(){
    wx.request({
      url: 'https://test01m.88huicai.com/api/v2/pub/banner/open_auth/list/APP_BRAND_PUBLICITY_HOME',
      method:'post',
      success:function(res){
        console.log(res.data)
      }
    })
  },
  onLoad:function(){
    this.postProList();
    console.log(app.globalData.host, 1);
    app.globalData.host = 'long';
    console.log(app.globalData.host, 2)
  }

 
})
