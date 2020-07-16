import React, { useState, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutChangeEvent,
  TextStyle,
  ViewStyle,
  Image,
} from "react-native";
import Animated from "react-native-reanimated";
import {
  bInterpolate,
  useTimingTransition,
} from "react-native-redash";

interface ListProps {
  title?: string;
  titleStyle?: TextStyle;
  headerStyle?: ViewStyle;
  subContainerStyle?: ViewStyle;
  children?: ReactNode;
  borderRadius?: number;
  iconSize?: number;
  rightIcon?: boolean;
  rightComponent?: ReactNode;
  open: boolean;
  onPress: () => void;
  style?: ViewStyle;
  headerComponent?: ReactNode;
  timingTransition?: number;
}
interface ChevronProps {
  transition: Animated.Node<number>;
  fill?: string;
  iconSize?: number;
}
const Icon = ({ transition, iconSize }: ChevronProps) => {
  const rotateZ = bInterpolate(transition, Math.PI, 0);
  return (
    <Animated.View style={{ transform: [{ rotateZ }] }}>
      <Image
        style={{ width: iconSize, height: iconSize }}
        source={require("./ArrowDown.png")}
      />
    </Animated.View>
  );
};

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
}: ListProps) => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const transition = useTimingTransition(open, { duration: timingTransition });
  const handleOnLayout = (e: LayoutChangeEvent) => {
    if (!containerHeight) {
      setContainerHeight(e.nativeEvent.layout.height);
    }
  };
  const height = bInterpolate(transition, 0, containerHeight ?? 0);
  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <Animated.View style={[styles.container, headerStyle]}>
          {title ? <Text style={[titleStyle]}>{title}</Text> : headerComponent}
          {rightIcon ? (
            <Icon iconSize={iconSize} {...{ transition }} />
          ) : undefined}
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        onLayout={handleOnLayout}
        style={[styles.items, { height }]}
      >
        <View style={[styles.item, subContainerStyle]}>{children}</View>
      </Animated.View>
    </View>
  );
};

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
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
