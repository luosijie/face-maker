export default function (image, canvasId, config = { maxWidth: 750, maxHeight: 1334 }) {
  const _this = this
  return new Promise((resolve, reject) => {
    let width = image.width
    let height = image.height
    if (width > config.maxWidth) {
      const ratio = width / config.maxWidth
      width = config.maxWidth
      height = height / ratio
    }
    if (height > config.maxHeight) {
      const ratio = height / config.maxHeight
      height = config.maxHeight
      width = width / ratio
    }
    const dpr = wx.getSystemInfoSync().pixelRatio
    _this.canvasCompress.width = width
    _this.canvasCompress.height = height
    const query = this.createSelectorQuery()
    query
      .select(`#${canvasId}`)
      .fields({ node: true, size: true })
      .exec(async res => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        // console.log('canvas-width-height', res[0].width, res[0].height)
        ctx.drawImage(image, 0, 0, width, height)
        wx.canvasToTempFilePath({
          canvas,
          x: 0,
          y: 0,
          destWidth: width,
          destHeight: height,
          complete (res) {
            if (res.errMsg === 'canvasToTempFilePath:ok') {
              resolve(res.tempFilePath)
              // wx.getFileSystemManager().readFile({
              //   filePath: res.tempFilePath,
              //   success (file) {
              //     resolve(file)
              //   },
              //   fail (err) {
              //     reject(err)
              //   }
              // })
            }
          },
          fail(err) {
            reject(err)
          }
        })
      })
  })
}
