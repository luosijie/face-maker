import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
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
      <div class='index'>
        <div class="image-container">
          <div class="add-image">
            <i class="iconfont icon-add-image"></i>
            <span class="label">添加图片</span>
          </div>
        </div>
        <div class="tool-options">
          <div class="top">
            <div class="cancel">
              <i class="iconfont icon-cancel"></i>
            </div>
            <div class="title">文字</div>
            <div class="confirm">
              <i class="iconfont icon-confirm"></i>
            </div>
          </div>
          <div class="main">dd</div>
        </div>
      </div>
    )
  }
}

export default Index 
