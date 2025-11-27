// src/modules/projects/ProjectsScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles/theme';

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projects Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.glowWhite },
});