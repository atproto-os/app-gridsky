import { defineNuxtModule, createResolver, addComponentsDir, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'desktop-app-gridsky',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    {
      // add components
      addComponentsDir({
        path: resolve('./runtime/components'),
      })
    }

    {
      // add plugins
      addPlugin(resolve('./runtime/plugin'))
    }
  },
})