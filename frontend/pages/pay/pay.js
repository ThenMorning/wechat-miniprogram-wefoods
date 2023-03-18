const app = getApp()
const API = require('../../utils/api')

Page({
  data: {
    canteenId: 0,
    canteenInfo: {},
    foods: [],
    total: 0,
    selectAddress: {},
    userAddress: [],
    note: '',
    popAddress: false,
  },
  onShow: function () {
    const data = app.globalData.cart
    this.setData({
      canteenId: data.canteenId,
      foods: data.foods,
      total: data.total
    })
    // 获取食堂的信息
    this.fetchCanteenInfo()
    this.fetchuserAddress()
  },
  /**
   * @evnet 提交订单信息
   */
  tapSubmitOrder() {
    const data = this.data
    wx.request({
      url: API.order,
      method: 'POST',
      data: {
        canteenId: data.canteenId,
        addressId: data.selectAddress.id,
        note: data.note,
        price: data.total,
        shipping: data.canteenInfo.shipping,
        foods: data.foods,
      },
      success: () => {
        wx.showToast({
          title: '支付成功',
        })
        wx.switchTab({
          url:"/pages/order/order"
        })
      }
    })
  },
  tapInput(e) {
    this.setData({
      note: e.detail.value,
    })
  },
  tapCreateAddress() {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  /**
   * @envet 选择地址
   */
  tapSelectAddress(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      selectAddress: this.data.userAddress[index],
      popAddress: false
    })
  },
  /**
   * @event 点击收货地址选择
   */
  tapAddress() {
    this.setData({
      popAddress: true
    })
  },
  /**
   * @evnet 修改弹窗
   */
  isVisible(e) {
    const type = e.currentTarget.dataset.type
    const visible = e.detail.visible
    if (type === 'address') return this.setData({
      popAddress: visible
    })
  },
  fetchuserAddress: function () {
    wx.request({
      url: API.address,
      data: {
        token: app.globalData.token
      },
      success: res => {
        this.setData({
          userAddress: res.data.data,
          selectAddress: res.data.data[0]
        })
      }
    })
  },
  /**
   * @method 获取食堂信息
   */
  fetchCanteenInfo: function () {
    wx.showLoading({
      title: '正在加载....'
    })
    wx.request({
      url: API.canteen,
      data: {
        canteenId: this.data.canteenId
      },
      success: res => {
        const data = res.data.data[0]
        this.setData({
          canteenInfo: data,
          total: this.data.total + data.shipping
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  }
})