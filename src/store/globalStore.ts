import { create } from 'zustand'

export const globalStore = create((set) => ({
    loading: true,
    showAnimation1: false,
    showAnimation2: false,
    showVideo: false,
    showNavbarOrFooter: true,
    navbarBackgroundColor: "#04203b",
    footerBackgroundColor: "#04203b",
    dropdownProgVisibility: false,
    dropdownAttivitaVisibility: false,
    dropdownAttivitaItems: ["Metrologia", "Programmazione", "Robotica", "Robot Collaborativi", "Banchi Semiautomatici", "Linee assemblaggio automatizzate", "Sistemi di visione ed intelligenza artificiale"],
    dropdownAttivitaLinks: ["metrologia", "programmazione", "robotica", "robotCollaborativi", "banchiSemiautomatici", "lineeAssemblaggio", "intelligenzaArtificiale"],
    dropdownProgItems: ["progettazione", "elettrica", "meccanica", "dinamica", "progettazione software"],
    dropdownProgLinks: ["progettazione", "elettrica", "meccanica", "dinamica", "progettazioneSoftware"],
    activeMenuItem: '/',
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
    })),
    updateDropdownProgVisibility: (visibility:boolean) => set(() => ({
        dropdownProgVisibility: visibility
    })),
    updateDropdownAttivitaVisibility: (visibility:boolean) => set(() => ({
        dropdownAttivitaVisibility: visibility
    })),
    updateActiveMenuItem: (item:string) => set(() => ({
        activeMenuItem: item
    })),
}))