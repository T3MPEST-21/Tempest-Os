// src/components/spiritcore/SpiritCore.tsx
import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';
import { ANIM } from '../../styles/theme';

export default function SpiritCore() {
  // Simple floating animation using Animated
  const translateY = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, { toValue: -ANIM.floatRange, duration: ANIM.floatDuration, useNativeDriver: Platform.OS !== 'web' }),
        Animated.timing(translateY, { toValue: ANIM.floatRange, duration: ANIM.floatDuration, useNativeDriver: Platform.OS !== 'web' }),
      ])
    ).start();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {/* On web, LottieView requires an explicit JSON object. On native, it can be a require path. */}
        <LottieView source={require('../../../assets/lottie/spirit-neutral.json')} autoPlay loop style={{ width: 160, height: 160 }} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' }
});