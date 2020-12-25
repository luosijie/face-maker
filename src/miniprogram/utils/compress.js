export default function (image, canvasId, config = { maxWidth: 750, maxHeight: 1334 }) {
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
  console.log('image in compressed', image, width, height)
  const dpr = wx.getSystemInfoSync().pixelRatio
  this.canvasCompress.width = width
  this.canvasCompress.height = height
  const query = this.createSelectorQuery()
  query
    .select(`#${canvasId}`)
    .fields({ node: true, size: true })
    .exec(async res => {
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      // canvas.width = res[0].width * dpr
      // canvas.height = res[0].height * dpr
      // ctx.scale(dpr, dpr)
      // console.log('canvas-width-height', res[0].width, res[0].height)
      ctx.drawImage(image, 0, 0, width - 100, height - 100)
    })
}
