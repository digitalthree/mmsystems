import { create } from 'zustand'

export const globalStore = create((set) => ({
    loading: true,
    showAnimation1: false,
    showAnimation2: false,
    showVideo: false,
    showNavbarOrFooter: true,
    navbarBackgroundColor: "#04203b",
    footerBackgroundColor: "#04203b",
    updateLoading: (loading:boolean) => set(() => ({
        loading: loading
    })),
    updateShowAnimation1: (showAnimation1:boolean) => set(() => ({
        showAnimation1: showAnimation1
    })),
    updateShowAnimation2: (showAnimation2:boolean) => set(() => ({
        showAnimation2: showAnimation2
    })),
    updateShowVideo: (showVideo:boolean) => set(() => ({
        showVideo: showVideo
    })),
    updateShowNavbarOrFooter: (showNavbarOrFooter:boolean) => set(() => ({
        showNavbarOrFooter: showNavbarOrFooter
    })),
    updateNavbarBackgroundColor: (navbarBackgroundColor:string) => set(() => ({
        navbarBackgroundColor: navbarBackgroundColor
    })),
    updateFooterBackgroundColor: (footerBackgroundColor:string) => set(() => ({
        footerBackgroundColor: footerBackgroundColor
    }))
}))