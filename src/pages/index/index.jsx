import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '图萌'
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
    Taro.navigateTo({
      url: '/pages/edit/index'
    })
    // window.location.href = url
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <div class="image-container">
          <div class="add-image">
            <i class="iconfont icon-add-image"></i>
            <span class="label">添加图片</span>
          </div>
        </div>
        <div class="menus">
          <div class="tool add-text" onClick={this.navigateTo('/edit')}>
            <i class="iconfont icon-text"></i>
            <span class="label">文字</span>
          </div>
          <div class="tool add-sticker">
            <i class="iconfont icon-sticker"></i>
            <span class="label">贴纸</span>
          </div>
        </div>
      </View>
    )
  }
}

export default Index 
