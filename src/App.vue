<script setup>
defineProps({
  errorMessage: {
    type: String,
    default: ''
  },
  maskedToken: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <main class="page">
    <section :class="['card', { error: errorMessage }]">
      <template v-if="errorMessage">
        <h1>Secret error</h1>
        <p class="message">{{ errorMessage }}</p>
      </template>

      <template v-else>
      <h1>Secret loaded</h1>
      <p class="message">Token ending: <strong>{{ maskedToken }}</strong></p>
      </template>
    </section>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  background: #0f172a;
  color: #e2e8f0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 1rem;
}

.card {
  width: min(420px, calc(100vw - 2rem));
  padding: 2rem;
  border-radius: 1rem;
  background: #111827;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.45);
  text-align: center;
}

.card.error {
  background: #7f1d1d;
  box-shadow: 0 20px 45px rgba(127, 29, 29, 0.35);
}

h1 {
  margin: 0 0 0.75rem;
  font-size: 2rem;
}

p {
  margin: 0;
}

.message {
  font-size: 1rem;
  line-height: 1.5;
  word-break: break-word;
}
</style>
