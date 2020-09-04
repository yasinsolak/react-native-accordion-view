import React, { useState, ReactNode } from 'react'
import {
  StyleSheet,
  Text,
  View,
  LayoutChangeEvent,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Image
} from 'react-native'
import Animated from 'react-native-reanimated'
import { useTimingTransition, mix } from 'react-native-redash'

import ArrowDown from './SVGComponents/ArrowDown'

const { interpolate } = Animated

interface ListProps {
  title?: string
  titleStyle?: TextStyle
  headerStyle?: ViewStyle
  subContainerStyle?: ViewStyle
  children?: ReactNode
  containerRadius?: number
  iconSize?: number
  rightIcon?: boolean
  open: boolean
  onPress: () => void
  style?: ViewStyle
  headerComponent?: ReactNode
  timingTransition?: number,
  activeOpacity?: number
}
interface ChevronProps {
  transition: Animated.Node<number>
  fill?: string
  iconSize?: number
}
const Icon = ({ transition, iconSize }: ChevronProps) => {
  const rotateZ = mix(transition, Math.PI, 0)
  return (
    <Animated.View style={{ transform: [{ rotateZ }] }}>
      <Image
        style={{width: iconSize, height: iconSize}}
        source={require('./ArrowDown.png')}
      />
    </Animated.View>
  )
}

export default ({
  title,
  titleStyle,
  headerStyle,
  subContainerStyle,
  children,
  iconSize = 24,
  rightIcon = false,
  open,
  onPress,
  style,
  headerComponent,
  timingTransition = 400,
  containerRadius = 0,
  activeOpacity = 1
}: ListProps) => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  const transition = useTimingTransition(open, { duration: timingTransition })
  const handleOnLayout = (e: LayoutChangeEvent) => {
    if (!containerHeight) {
      setContainerHeight(e.nativeEvent.layout.height)
    }
  }
  const bottomRadius = interpolate(transition, {
    inputRange: [0, containerRadius / 400],
    outputRange: [containerRadius, 0]
  })
  const height = mix(transition, 0, containerHeight ?? 0)
  return (
    <>
      <TouchableOpacity activeOpacity={activeOpacity} onPress={() => onPress()}>
        <Animated.View
          style={[
            styles.container,
            headerStyle,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
              borderTopLeftRadius: containerRadius,
              borderTopRightRadius: containerRadius
            }
          ]}>
          {title ? <Text style={[titleStyle]}>{title}</Text> : headerComponent}
          {rightIcon ? (
            <Icon iconSize={iconSize} {...{ transition }} />
          ) : undefined}
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        onLayout={handleOnLayout}
        style={[styles.items, { height }]}>
        <View
          style={[
            styles.item,
            subContainerStyle,
            {
              borderBottomLeftRadius: containerRadius,
              borderBottomRightRadius: containerRadius
            }
          ]}>
          {children}
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  items: {
    overflow: 'hidden'
  },
  item: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
