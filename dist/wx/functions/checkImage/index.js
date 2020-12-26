const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
/**
 * 校验图片合法性
 * @param {*} event.fileID 微信云存储的图片ID
 * @return {Number} 0:校验失败；1:校验通过
 */
exports.main = async (event, context) => {
  const contentType = 'image/png'
  const fileID = event.fileID
  try {
    // 根据fileID下载图片
    const file = await cloud.downloadFile({
      fileID
    })
    const value = file.fileContent
    // 调用 imgSecCheck 借口，校验不通过接口会抛错
    // 必要参数 media { contentType, value }
    const result = await cloud.openapi.security.imgSecCheck({
      media: {
        contentType,
        value
      }
    })
    return 1
  } catch (err) {
    return 0
  }
}
