// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName:null,
    textName:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   
    this.setData({
      titleName: options.title
    })
    var self = this;
    var text = wx.getStorage({
      key: 'text',
      success: function(res) {
        console.log(res,1)
        self.setData({
          textName: res.data
        })
      },
    })
    
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