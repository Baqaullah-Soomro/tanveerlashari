'use client'

import { create } from 'zustand'

type NavState = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useNavStore = create<NavState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}))
