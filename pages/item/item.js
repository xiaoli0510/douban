//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    itemData:{}

  },
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title:options.title
    });
    this.getDoubanData(options.id);
  },
  //封装函数 获取豆瓣数据
  getDoubanData: function (id) {
    var itemApi = 'https://douban.uieee.com';
    var then = this;
    const path = 'v2/movie/subject/'+id;
    app.douban(itemApi, path, {})
      .then(res => {
        console.log(res.data)
        let time = res.data.mainland_pubdate;
        console.log(res.data.images.small)
        then.setData({itemData:res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
})