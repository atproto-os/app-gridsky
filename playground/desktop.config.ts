import { defineDesktopConfig } from '@owdproject/core'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nova',
  apps: ['@owdproject/app-gridsky'],
  modules: [],
  systemBar: {
    enabled: true,
    startButton: true,
  },
})
