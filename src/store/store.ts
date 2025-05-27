'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type NavState = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useNavStore = create<NavState>((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}))

type ResumeState = {
  hasDownloaded: boolean
  markAsDownloaded: () => void
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      hasDownloaded: false,
      markAsDownloaded: () => set({ hasDownloaded: true }),
    }),
    {
      name: 'resume-storage',
    }
  )
)
