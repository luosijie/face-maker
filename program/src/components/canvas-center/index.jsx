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

    componentWillMount() {
        // const query = wx.createSelectorQuery()
        // query.select('#canvas')
        // .fileds({ node: true, size: true})
        // .exec(res => {
        //     const canvas = res[0].node
        //     const ctx = canvas.getContext('2d')
        //     ctx.fillRect(0, 0, 100, 100)
        // })
    }

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
        // console.log('canvas-绘图', context, imageExample, this.$scope)
        const query = wx.createSelectorQuery()
        query.select('#canvas')
        .fields({ node: true, size: true })
        .exec((res) => {
            console.log("ee", res)
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')

            const dpr = wx.getSystemInfoSync().pixelRatio
            canvas.width = res[0].width * dpr
            canvas.height = res[0].height * dpr
            ctx.scale(dpr, dpr)

            ctx.fillRect(0, 0, 100, 100)
        })
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    increment = () => {
        const { counterStore } = this.props
        counterStore.increment()
    }

    decrement = () => {
        const { counterStore } = this.props
        counterStore.decrement()
    }

    incrementAsync = () => {
        const { counterStore } = this.props
        counterStore.incrementAsync()
    }
    navigateTo(url) {
        // window.location.href = url
    }

    render() {
        const { counterStore: { counter } } = this.props
        return (
            <View className="canvas-container">
                <canvas id="canvas" type="2d" />
                <CoverView className="add-image">
                    <CoverImage className="image" src={imageAdd} />
                    <CoverView className="label">添加图片</CoverView>
                </CoverView>
            </View>
        )
    }
}

export default Index 
