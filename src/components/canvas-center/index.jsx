import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Canvas, CoverView, CoverImage } from '@tarojs/components'
import ToolFont from '../../components/tool-font'
import { observer, inject } from '@tarojs/mobx'
import imageAdd from '../../assets/images/icon-add-image.png'
import imageExample from '../../assets/images/example.jpeg'
import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {
    config = {
        navigationBarTitleText: '编辑'
    }

    componentWillMount() {}

    componentWillReact() {
        console.log('componentWillReact')
    }

    componentDidMount() {
        // const context = Taro.createCanvasContext('canvas', this.$scope)
        // // context.drawImage(imageExample, 0, 0, 300, 300)
        // context.setFillStyle('#000000')
        // context.setFontSize('20')
        // context.fillText('asdda', 0, 0)
        // context.draw()
        console.log('canvas-绘图', this)
        const query = wx.createSelectorQuery().in(this.$scope)
        const imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602046663531&di=ea528410cd6762a658cf53dc347425b5&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408'
        // wx.downloadFile({
        //     url: imgUrl,
        //     success (res) {
        //         console.log('image from dowmloadFile', res.tempFilePath)
        //         wx.getImageInfo({
        //             src: res.tempFilePath,
        //             success (resImageInfo) {
        //                 console.log('image from getImageInfo', resImageInfo)
        //             },
        //             fail (err) {
        //                 console.log('err from getImageInfo', err)
        //             }
        //         })
        //     }
        // })
        wx.getImageInfo({
            src: imgUrl,
            success (tempImage) {
                query
                .select('#myCanvas')
                .fields({ node: true, size: true })
                .exec(res => {
                    const canvas = res[0].node
                    const ctx = canvas.getContext('2d')
                    const dpr = wx.getSystemInfoSync().pixelRatio
                    canvas.width = res[0].width * dpr
                    canvas.height = res[0].height * dpr
                    ctx.scale(dpr, dpr)
                    // ctx.fillRect(0, 0, canvas.width, canvas.height)
                    console.log('image-temp-path', tempImage.path)
                    ctx.drawImage(tempImage.path, 0, 0, 300, 300)
                });
            },
            fail (err) {
                console.error('err from getImageInfo', err)
            }
        })
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    navigateTo(url) {
        // window.location.href = url
    }

    onReady() {
        console.log("ss")
    }

    render() {
        return (
            <View className="canvas-container">
                <canvas id="myCanvas" type="2d"/>
                <CoverView className="add-image">
                    <CoverImage className="image" src={imageAdd} />
                    <CoverView className="label">添加图片</CoverView>
                </CoverView>
            </View>
        )
    }
}

export default Index 
