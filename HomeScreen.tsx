// src/modules/home/HomeScreen.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpiritCore from '../../components/spiritcore/SpiritCore';
import WindowManager from '../../components/windows/WindowManager';
import { useStore } from '../../lib/state';
import { COLORS } from '../../styles/theme';

export default function HomeScreen() {
  const setActiveApp = useStore(s => s.setActiveApp);

  return (
    <SafeAreaView style={styles.container}>
      <SpiritCore />
      <View style={styles.quickRow}>
        {['Projects','Sonique','Terminal','Settings'].map((label) => (
          <TouchableOpacity key={label} style={styles.btn} onPress={() => setActiveApp(label.toLowerCase())}>
            <Text style={styles.btnText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <WindowManager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, alignItems: 'center', justifyContent: 'center' },
  quickRow: { position: 'absolute', bottom: 50, flexDirection: 'row', gap: 10 },
  btn: { padding: 12, borderRadius: 10, backgroundColor: COLORS.surface, marginHorizontal: 6, borderWidth: 1, borderColor: COLORS.translucent },
  btnText: { color: COLORS.glowWhite }
});