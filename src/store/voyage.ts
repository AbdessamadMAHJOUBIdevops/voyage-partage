import { create } from 'zustand';
import { voyages } from '../data/trips';

interface VoyageState {
  currentDay: number;
  center: [number, number] | null;
  voyages: typeof voyages;
  selectedVoyage: typeof voyages[0] | null;
  setCurrentDay: (day: number) => void;
  setCenter: (center: [number, number] | null) => void;
  setSelectedVoyage: (voyage: typeof voyages[0]) => void;
}

export const useVoyageStore = create<VoyageState>((set) => ({
  currentDay: 0,
  center: null,
  voyages: voyages,
  selectedVoyage: voyages[0],
  setCurrentDay: (day) => set({ currentDay: day }),
  setCenter: (center) => set({ center }),
  setSelectedVoyage: (voyage) => set({ selectedVoyage: voyage, currentDay: 0, center: null }),
}));
