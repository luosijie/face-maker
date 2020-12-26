/**
 * 校验图片是否存在敏感信息
 * @param { String } filePath
 * @return { Promise } promise返回校验结果
 */
export default function (filePath) {
  return new Promise((resolve, reject) => {
    // 先将图片上传到云开发存储
    wx.cloud.uploadFile({
      cloudPath: `${new Date().getTime()}.png`,
      filePath,
      success (res) {
        // 调用云函数-checkImage
        wx.cloud.callFunction({
          name: 'checkImage',
          data: {
            fileID: res.fileID
          },
          success (res) {
            // res.result -> 0:存在敏感信息；1:校验通过
            resolve(res.result)
            if (!res.result) {
              wx.showToast({
                title: '图片可能含有敏感信息, 请重新选择',
                icon: 'none'
              })
            }
          },
          fail (err) {
            reject(err)
          }
        })
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
