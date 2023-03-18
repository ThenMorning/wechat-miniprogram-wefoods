const API = require('../../utils/api')
Page({
  data: {
    isLoading: true,
    canteenId: -1,
    canteenInfo: {},
  },
  onLoad: function(options) {
    // set id
    this.setData({
      canteenId: options.canteenId
    })
    // fetchData
    this._fetchInfo()
  },
  _fetchInfo: function() {
    wx.request({
      url: API.canteen,
      data: {
        canteenId: this.data.canteenId
      },
      success: res => {
        this.setData({
          isLoading: false,
          canteenInfo: res.data.data[0]
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  }
})