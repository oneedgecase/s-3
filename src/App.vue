<script setup>
defineProps({
  maskedToken: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main class="page">
    <section class="card">
      <h1>Secret loaded</h1>
      <p>Token ending: <strong>{{ maskedToken }}</strong></p>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  background: #0f172a;
  color: #e2e8f0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.card {
  width: min(420px, calc(100vw - 2rem));
  padding: 2rem;
  border-radius: 1rem;
  background: #111827;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.45);
  text-align: center;
}

h1 {
  margin: 0 0 0.75rem;
  font-size: 2rem;
}

p {
  margin: 0;
  font-size: 1rem;
}
</style>
