// pages/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { name: '汤姆' },
      { name: '一朵开花的数' },
      { name: '尼古拉斯赵四' },
      { name: '罗伯特巴乔' },
      { name: '汤姆' },
      { name: '汤姆' },
      { name: '汤姆' },
      { name: '汤姆' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  toVs: function () {
    wx.navigateTo({
      url: '/pages/letsvs/letsvs'
    })
  }
})