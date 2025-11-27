import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


/src
  /app
    _layout.tsx
    index.tsx
    /terminal
      index.tsx
    /projects
      index.tsx
    /sonique
      index.tsx
    /settings
      index.tsx

  /components
    /spiritcore
      SpiritCore.tsx
      moods/
        neutral.json
        curious.json
        excited.json
        sleepy.json
    /windows
      Window.tsx
      WindowManager.tsx
    /ui
      Button.tsx
      Card.tsx
      FadeInView.tsx
      OSBar.tsx

  /modules
    /home
      HomeScreen.tsx
    /terminal
      TerminalScreen.tsx
    /projects
      ProjectsScreen.tsx
    /sonique
      SoniqueScreen.tsx
      visualizers/
        BasicWave.tsx
        GlowBars.tsx
    /settings
      SettingsScreen.tsx

  /lib
    state.ts
    os-state.ts
    mood-engine.ts
    sound-engine.ts
    utils.ts

  /assets
    /lottie
    /icons
    /wallpapers
