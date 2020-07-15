import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
//@ts-ignore
import {
  bInterpolate,
  bInterpolateColor,
} from "react-native-redash"
import { ArrowDown} from "~/components/SVGComponents"

const size = 30;
interface ChevronProps {
  transition: Animated.Node<number>
  fill?: string
  iconSize?: number
}

export default ({ transition, fill, iconSize}: ChevronProps) => {
  const rotateZ = bInterpolate(transition, Math.PI, 0);
  const backgroundColor = bInterpolateColor(
    transition,
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 }
  ) as Animated.Node<number>;
  return (
    <Animated.View
      style={[styles.container, { transform: [{ rotateZ }]}]}
    >
      <ArrowDown fill={fill} width={iconSize} height={iconSize} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
  },
})