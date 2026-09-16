import { createApp } from 'vue'
import App from './App.vue'

let isMounted = false

const mountApp = (props) => {
  if (isMounted) {
    return
  }

  createApp(App, props).mount('#app')
  isMounted = true
}

window.addEventListener('error', (event) => {
  const message = event.error instanceof Error ? event.error.message : event.message

  if (message === 'APP_ACCESS_TOKEN is not found' || message === 'APP_ACCESS_TOKEN is invalid') {
    mountApp({ errorMessage: message })
  }
})

const token = import.meta.env.VITE_APP_ACCESS_TOKEN

if (token === undefined || token === null || token.trim() === '') {
  throw new Error('APP_ACCESS_TOKEN is not found')
}
if (token !== 'or-qa-valid-token') {
  throw new Error('APP_ACCESS_TOKEN is invalid')
}

const visibleChars = 4
const maskedToken = `${'*'.repeat(Math.max(0, token.length - visibleChars))}${token.slice(-visibleChars)}`

mountApp({
  maskedToken
})
