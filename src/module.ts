import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit'
import { registerTailwindPath } from '@owdproject/kit-tailwind/kit/registerTailwindPath'

export default defineNuxtModule({
  meta: {
    name: 'desktop-app-gridsky',
  },
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    addPlugin(resolve('./runtime/plugin'))

    registerTailwindPath(
      nuxt,
      resolve('./runtime/components/**/*.{vue,mjs,ts}'),
    )
  },
})
