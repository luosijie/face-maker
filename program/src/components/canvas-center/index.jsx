import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Canvas, CoverView, CoverImage } from '@tarojs/components'
import ToolFont from '../../components/tool-font'
import { observer, inject } from '@tarojs/mobx'
import imageAdd from '../../assets/images/icon-add-image.png'
import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '编辑'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className="canvas-container">
        <Canvas id="canvas" type="2d"/>
        <CoverView className="add-image">
          <CoverImage className="image" src={imageAdd}/>
          <CoverView className="label">添加图片</CoverView>
        </CoverView>
      </View>
    )
  }
}

export default Index 
