const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
exports.main = async (event, context) => {
  const contentType = event.contentType
  const fileID = event.fileID
  try {
    const file = await cloud.downloadFile({
      fileID
    })
    const value = file.fileContent
    console.log('file from fownload', file)
    const result = await cloud.openapi.security.imgSecCheck({
      media: {
        contentType,
        value
      }
    })
    return result
  } catch (err) {
    throw err
  }
}
