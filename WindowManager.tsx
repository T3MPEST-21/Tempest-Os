// src/components/windows/WindowManager.tsx
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../../lib/state';
import { COLORS, SIZES } from '../../styles/theme';

// Import placeholder screens
import ProjectsScreen from '../../modules/projects/ProjectsScreen';
import SettingsScreen from '../../modules/settings/SettingsScreen';
import SoniqueScreen from '../../modules/sonique/SoniqueScreen';
import TerminalScreen from '../../modules/terminal/TerminalScreen';

const appMap: Record<string, React.ComponentType> = {
  projects: ProjectsScreen,
  sonique: SoniqueScreen,
  terminal: TerminalScreen,
  settings: SettingsScreen,
};

export default function WindowManager() {
  const { activeApp, setActiveApp } = useStore();
  const AppComponent = activeApp ? appMap[activeApp] : null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!!activeApp}
      onRequestClose={() => setActiveApp(null)}>
      <View style={styles.modalContainer}>
        <View style={styles.window}>
          <View style={styles.header}>
            <Text style={styles.title}>{activeApp}</Text>
            <TouchableOpacity onPress={() => setActiveApp(null)}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {AppComponent && <AppComponent />}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  window: { width: '90%', height: '80%', backgroundColor: COLORS.surface, borderRadius: SIZES.radius, overflow: 'hidden', borderColor: COLORS.neonPurple, borderWidth: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: SIZES.padding, backgroundColor: COLORS.background, borderBottomWidth: 1, borderBottomColor: COLORS.neonPurple },
  title: { color: COLORS.glowWhite, textTransform: 'capitalize' },
  closeButton: { color: COLORS.softPink, fontSize: 18 },
  content: { flex: 1, padding: SIZES.padding },
});