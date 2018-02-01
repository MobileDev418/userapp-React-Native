import React from 'react'
import { View, Platform } from 'react-native'
import StyleSheet from 'react-native-extended-stylesheet'

const height = Platform.OS === 'ios' ? 30 : 60  //20

const StatusBar = props => (
    <View style={{ height: height }} />
)

export default StatusBar
