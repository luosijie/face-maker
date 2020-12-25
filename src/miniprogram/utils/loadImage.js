
/**
 * 图片要放在 image 里才可以被 canvas 渲染
 * @param { String } src 本地文件路径
 * @param { Object } canvas canvas实例
 * @return { Promise } 返回 image 元素
 */
export default (src, canvas) => {
  const image = canvas.createImage()
  image.src = src
  return new Promise((resolve, reject) => {
    try {
      image.onload = e => {
        console.log('iamge-loaded', src, e)
        resolve(image)
      }
    } catch (err) {
      reject(err)
    }
  })
}
