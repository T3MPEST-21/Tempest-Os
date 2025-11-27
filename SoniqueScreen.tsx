// src/modules/sonique/SoniqueScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles/theme';

export default function SoniqueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sonique Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.glowWhite },
});