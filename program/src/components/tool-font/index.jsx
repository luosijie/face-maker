import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
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
    const colorOptions = ["#000000", "#ffffff", "#0076b6", "#00a948", "#ffb500", "#ff2929", "#a687bd"];
    const colorItems = colorOptions.map(item =>
      <View style={{background: item}}></View>
    );
    return (
      <View className='index'>
        <ToolTemplate>
            <View className="font-container">
              <Input placeholder="请输入文字"/>
              <View className="style-item">
                <View className="label">透明度</View>
                <View className="content"></View>
              </View>
              <View className="style-item">
                <View className="label">颜色</View>
                <View className="content color">
                  {colorItems}
                </View>
              </View>
              <View className="style-item">
                <View className="label">样式</View>
                <View className="content"></View>
              </View>
            </View>
        </ToolTemplate>
      </View>
    )
  }
}

export default Index 
