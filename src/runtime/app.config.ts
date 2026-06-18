export default {
  id: 'org.owdproject.gridsky',
  title: 'Gridsky',
  category: 'internet',
  icon: 'lucide:grid-3x3',
  windows: {
    main: {
      component: () => import('./components/Window/WindowGridsky.vue'),
      resizable: false,
      size: {
        width: 400,
        height: 700,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    gridsky: {
      command: 'gridsky',
    },
  },
  terminal: {
    gridsky: {
      description: 'Open Gridsky',
      usage: 'gridsky',
    },
  },
  commands: {
    gridsky: (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
