const API = require('../../utils/api')
const MAP = require('../../utils/map')

Page({
  data: {
    isLoading: true,
    location: '',
    canteen: []
  },
  onLoad: function () {
    this._fetchLocation()
    this._fetchAllCanteen()
  },
  /**
   * @event 点击店铺跳转事件
   */
  tapCanteen: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../shop/shop?canteenId=${id}`
    })
  },
  /**
   * @获取餐厅信息
   */
  _fetchAllCanteen: function () {
    wx.request({
      url: API.canteen,
      method: 'GET',
      success: res => {

        this.setData({
          isLoading: false,
          canteen: res.data.data
        })
      }
    })
  },
  /**
   * @event 获取地理位置
   */
  _fetchLocation: function () {
    wx.getLocation({
      success: res => {
        MAP.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            this.setData({
              location: res.result.ad_info.name.replace(/,*/g, '').replace('中国广东省', '')
            })
          }
        })
      },
      fail: () => {
        this.setData({
          location: '定位失败 :!'
        })
      }
    })
  },
})