import React, { useRef, useEffect } from 'react';
import { ColorValue, View, StyleSheet } from 'react-native';
import { colors } from '../colors';
import { ReactNode } from 'react';
import Svg, { Circle, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, { Easing, EasingNode } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  radius: number;
  bgColor: ColorValue;
  gradientStartColor: ColorValue;
  gradientEndColor: ColorValue;
  children?: ReactNode;
  fill?: number;
  icon?: React.ReactNode;
};

export const Ring: React.FC<Props> = ({ radius, bgColor, gradientStartColor, gradientEndColor, fill = 0, icon }) => {
  const circleCircumference = 2 * Math.PI * radius;
  const strokeDashoffset = useRef(new Animated.Value(circleCircumference)).current;

  useEffect(() => {
    Animated.timing(strokeDashoffset, {
      toValue: circleCircumference - (circleCircumference * fill) / 100,
      duration: 1000,
      easing: EasingNode.sin,
    }).start();
  }, [fill]);

  return (
    <Svg height="300" width="300" viewBox="0 0 180 180" style={{ position: 'absolute' }}>
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={gradientEndColor} />
          <Stop offset="100%" stopColor={gradientStartColor} />
        </LinearGradient>
      </Defs>
      <G rotation={-90} originX="90" originY="90">
        <Circle cx="50%" cy="50%" r={radius} stroke={bgColor} fill="transparent" strokeWidth="19" />
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth="19"
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <G transform={`translate(95 ${85 - radius})`}>
          <G transform={`rotate(-90 ${radius} 0) rotate(180)`}>{icon}</G>
        </G>
      </G>
    </Svg>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: '#394867',
  },
});
