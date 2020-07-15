import React, {useState, ReactNode} from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, LayoutChangeEvent, TextStyle, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { bInterpolate, useTransition } from "react-native-redash";
import Chevron from "./Chevron";


const { interpolate } = Animated

interface ListProps {
  title?: string
  titleStyle?: TextStyle
  headerStyle?: ViewStyle
  subContainerStyle?: ViewStyle
  children?: ReactNode
  borderRadius?: number
  iconColor?: string
  iconSize?: number,
  rightIcon?: boolean,
  rightComponent?: ReactNode
}

export default ({
  title,
  titleStyle,
  headerStyle,
  subContainerStyle,
  children,
  borderRadius=0,
  iconColor,
  iconSize=24,
  rightIcon=true,
  rightComponent
 }: ListProps) => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const transition = useTransition(open)
  const bottomRadius = interpolate(transition, {
    inputRange: [0, borderRadius / 400],
    outputRange: [borderRadius, 0],
  });
  const handleOnLayout = (e: LayoutChangeEvent) => {
    if(!containerHeight) {
      setContainerHeight(e.nativeEvent.layout.height)
    }
  }
  const height = bInterpolate(transition, 0, containerHeight?? 0);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <Animated.View
          style={[
            styles.container,
            headerStyle,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },
          ]}
        >
          <Text style={[titleStyle]}>{title}</Text>
          {rightIcon ? <Chevron iconSize={iconSize} fill={iconColor} {...{ transition }} /> : undefined}
          {rightIcon === false ? rightComponent : rightIcon}
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        onLayout={handleOnLayout}
        style={[styles.items, { height }]}
      >
        <View
          style={[
            styles.item,
            subContainerStyle,
            {
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
          ]}
        >
          {children}
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    overflow: "hidden",
  },
  item: {
    backgroundColor: 'white',
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});