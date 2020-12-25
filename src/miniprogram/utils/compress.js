export default function (image, canvasId, config = { maxWidth: 750, maxHeight: 1334 }) {
  let width = image.width
  let height = image.height
  console.log('image in compressed', image, width, height)
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
  const query = this.createSelectorQuery()
  query
    .select(`#${canvasId}`)
    .fields({ node: true, size: true })
    .exec(async res => {
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0, width, height)
    })
}
