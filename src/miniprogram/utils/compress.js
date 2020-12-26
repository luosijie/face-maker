/**
 * 压缩图片
 * 将尺寸超过规范的图片最小限度压缩
 * @param {Image} image 需要压缩的图片实例
 * @param {String} canvasId 用来处理压缩图片的canvas对应的canvasId
 * @param {Object} config 压缩的图片规范 -> { maxWidth 最大宽度, maxHeight 最小宽度 }
 * @return {Promise} promise返回 压缩后的 图片路径
 */
export default function (image, canvasId, config = { maxWidth: 750, maxHeight: 1334 }) {
  // 引用的组件传入的this作用域
  const _this = this
  return new Promise((resolve, reject) => {
    // 获取图片原始宽高
    let width = image.width
    let height = image.height
    // 宽度 > 最大限宽 -> 重置尺寸
    if (width > config.maxWidth) {
      const ratio = width / config.maxWidth
      width = config.maxWidth
      height = height / ratio
    }
    // 高度 > 最大限高度 -> 重置尺寸
    if (height > config.maxHeight) {
      const ratio = height / config.maxHeight
      height = config.maxHeight
      width = width / ratio
    }
    // 设置canvas的css宽高
    _this.canvasCompress.width = width
    _this.canvasCompress.height = height
    const query = this.createSelectorQuery()
    query
      .select(`#${canvasId}`)
      .fields({ node: true, size: true })
      .exec(async res => {
        // 获取 canvas 实例
        const canvas = res[0].node
        // 获取 canvas 绘图上下文
        const ctx = canvas.getContext('2d')
        // 根据设备dpr处理尺寸
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        // 将图片绘制到 canvas
        ctx.drawImage(image, 0, 0, width, height)
        // 将canvas图片上传到微信临时文件
        wx.canvasToTempFilePath({
          canvas,
          x: 0,
          y: 0,
          destWidth: width,
          destHeight: height,
          complete (res) {
            if (res.errMsg === 'canvasToTempFilePath:ok') {
              // 返回临时文件路径
              resolve(res.tempFilePath)
            }
          },
          fail(err) {
            reject(err)
          }
        })
      })
  })
}
