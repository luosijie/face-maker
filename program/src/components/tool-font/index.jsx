import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Slider } from '@tarojs/components'
import ToolTemplate from '../../components/tool-template'
import { observer, inject } from '@tarojs/mobx'
import classNames from 'classnames'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {
    config = {
        navigationBarTitleText: '编辑'
    }

    constructor(props) {
        super(props)
        this.state = {
            activeColor: '#000000',
            activeStyle: 'transverse'
        }
    }

    componentWillMount() { }

    componentWillReact() {
        console.log('componentWillReact')
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    navigateTo(url) {
        // window.location.href = url
    }

    render() {
        // 颜色配置
        const colorOptions = ['#000000', '#ffffff', '#0076b6', '#00a948', '#ffb500', '#ff2929', '#a687bd']
        const colorItems = colorOptions.map(item =>
            <View className={classNames('color-item', item === this.state.activeColor && 'active')} style={{ background: item }} key={item}></View>
        )

        // 样式配置
        const styleOptions = [
            { icon: 'icon-style-transverse', code: 'transverse', label: '横向' },
            { icon: 'icon-style-verticality', code: 'verticality', label: '竖向' },
            { icon: 'icon-style-bold', code: 'bold', label: '粗体' },
            { icon: 'icon-style-shadow', code: 'shadow', label: '阴影' },
            { icon: 'icon-style-stroke', code: 'stoke', label: '描边' }
        ]
        const styleItems = styleOptions.map(item => {
            return (
                <View className={classNames('style-item', item.code === this.state.activeStyle && 'active')} key={item.icon}>
                    <View className={classNames('iconfont', item.icon)}></View>
                    <Text className="label">{item.label}</Text>
                </View>
            )
        })
        return (
            <View className='index'>
                <ToolTemplate>
                    <View className='font-container'>
                        <Input placeholder='请输入文字' />
                        <View className='item'>
                            <View className='label'>透明度</View>
                            <View className='content opacity'>
                                <Slider step={10} value={100} selectedColor='#333333' />
                            </View>
                        </View>
                        <View className='item'>
                            <View className='label'>颜色</View>
                            <View className='content color'>
                                {colorItems}
                            </View>
                        </View>
                        <View className='item'>
                            <View className='label'>样式</View>
                            <View className='content style'>
                                {styleItems}
                            </View>
                        </View>
                    </View>
                </ToolTemplate>
            </View>
        )
    }
}

export default Index 
