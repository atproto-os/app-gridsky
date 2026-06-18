import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/core/kit/defineDesktopApp'
import configAppGridsky from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-gridsky-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppGridsky)
  },
})
