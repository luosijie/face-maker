import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo(url) {
    // window.location.href = url
  }

  render () {
    return (
      <View class='index'>
        <View class="top">
          <View class="cancel">
            <i class="iconfont icon-cancel"></i>
          </View>
          <View class="title">{ this.props.title }</View>
          <View class="confirm">
            <i class="iconfont icon-confirm"></i>
          </View>
        </View>
        <View class="main">
          { this.props.children }
        </View>
      </View>
    )
  }
}

export default Index 
