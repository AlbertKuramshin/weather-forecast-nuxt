import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
    locale: {
      locale: 'ru',
    },
    date: {
      locale: {
        ru: 'ru-RU',
      },
    },
  })
  app.vueApp.use(vuetify)
})