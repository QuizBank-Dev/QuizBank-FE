import { create } from 'zustand'

interface MobileMenuStore {
    isOpen: boolean
    openMenu: () => void
    closeMenu: () => void
}

const useMobileMenuStore = create<MobileMenuStore>((set) => ({
    isOpen: false,
    openMenu: () => set({ isOpen: true }),
    closeMenu: () => set({ isOpen: false }),
}))

export default useMobileMenuStore
