import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import ToolTemplate from '../../components/tool-template'
import { observer, inject } from '@tarojs/mobx'

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
      <View className='index'>
        <View className="image-container">
          <View className="add-image">
            <i class="iconfont icon-add-image"></i>
            <View className="label">添加图片</View>
          </View>
        </View>
        <ToolTemplate title="文字">
          文字内容
        </ToolTemplate>
      </View>
    )
  }
}

export default Index 
