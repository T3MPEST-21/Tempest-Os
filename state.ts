// src/lib/state.ts
import { create } from 'zustand';

type SpiritMood = 'neutral' | 'curious' | 'sleepy';

type AppState = {
  activeApp: string | null;
  setActiveApp: (a: string | null) => void;
  spiritMood: SpiritMood;
  setSpiritMood: (m: SpiritMood) => void;
};

export const useStore = create<AppState>((set) => ({
  activeApp: null,
  setActiveApp: (a) => set({ activeApp: a }),
  spiritMood: 'neutral',
  setSpiritMood: (m) => set({ spiritMood: m }),
}));