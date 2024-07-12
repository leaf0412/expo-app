import { StyleSheet, Pressable, PressableProps, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface AnimatedPressableProps extends PressableProps {
  children: ReactNode;
  animatedStyle?: ViewStyle;
}

const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  children,
  style,
  ...porps
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={[styles, animatedStyle]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={style}
        {...porps}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default AnimatedPressable;
