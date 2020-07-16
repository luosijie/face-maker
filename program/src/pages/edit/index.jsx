import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Canvas, CoverView } from '@tarojs/components'
import ToolFont from '../../components/tool-font'
import CanvasCenter from '../../components/canvas-center'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '编辑'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

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
      <View className='index'>
        <CanvasCenter />
        <ToolFont />
      </View>
    )
  }
}

export default Index 
