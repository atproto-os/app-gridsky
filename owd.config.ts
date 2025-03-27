export default defineDesktopApp({
    id: "org.owdproject.gridsky",
    name: "Gridsky",
    category: "internet",
    icon: "lucide:grid-3x3",
    windows: {
        main: {
            component: () => import('./app/components/Window/WindowGridsky.vue'),
            name: "WindowDebug",
            category: "social",
            title: "Gridsky",
            icon: "lucide:grid-3x3",
            pinned: true,
            resizable: false,
            size: {
                width: 400,
                height: 700
            },
            position: {
                x: 400,
                y: 240,
                z: 0
            },
        }
    },
    commands: {
        gridsky: (app) => {
            app.openWindow("main")
        }
    },
    onLaunch: (app) => {
        app.openWindow('main')
    }
})