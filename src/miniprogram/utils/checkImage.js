export default function (filePath) {
  return  new Promise((resolve, reject) => {
    wx.cloud.uploadFile({
      cloudPath: `${new Date().getTime()}.png`,
      filePath,
      success (res) {
        wx.cloud.callFunction({
          name: 'checkImage',
          data: {
            fileID: res.fileID
          },
          success (res) {
            resolve(res.result)
            if (!res.result) {
              wx.showToast({
                title: '图片可能含有敏感信息, 请重新选择',
                icon: 'none'
              })
            }
          },
          fail(err) {
            reject(err)
          }
        })
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
