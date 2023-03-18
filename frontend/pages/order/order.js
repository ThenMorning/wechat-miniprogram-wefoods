const app = getApp()
const API = require('../../utils/api')

Page({
  data: {
    isLoading: true,
    orders: [],
    currentOrders: [],
    activeType: -1
  },
  onShow() {
    this._fetchOrder()
  },
  _filter(key) {
    if (key === -1) {
      this.setData({
        activeType: key,
        currentOrders: this.data.orders
      })
    } else {
      this.setData({
        activeType: key,
        currentOrders: this.data.orders.filter(item => (item.status === key))
      })
    }
  },
  tapItem(e) {
    const index = e.currentTarget.dataset.index
    app.globalData.payload['type'] = 'details'
    app.globalData.payload['data'] = this.data.currentOrders[index]
    wx.navigateTo({
      url: '../details/details'
    })
  },
  _fetchOrder() {
    this.setData({
      isLoading: true
    })
    wx.request({
      url: API.order,
      data: {
        token: app.globalData.token
      },
      success: res => {
        this.setData({
          isLoading: false,
          orders: res.data.data
        })

      },
      complete: () => {
        this._filter(-1)
        wx.hideLoading()
      }
    })
  }
})