<script setup>
defineProps({
  errorMessage: { type: String, default: '' },
  maskedToken:  { type: String, default: '' }
})
</script>

<template>
  <div class="page">
    <div class="stripes" aria-hidden="true" />
    <main class="container">

      <header class="header">
        <div class="logo">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          SecretVault
        </div>
      </header>

      <template v-if="errorMessage">
        <section class="hero">
          <span class="badge error-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Error
          </span>
          <h1 class="hero-title">Authentication<br>Failed</h1>
          <p class="hero-sub">{{ errorMessage }}</p>
        </section>
        <div class="info-grid">
          <div class="info-card">
            <span class="info-label">Status</span>
            <span class="info-value red">Rejected</span>
          </div>
          <div class="info-card">
            <span class="info-label">Token</span>
            <span class="info-value red">—</span>
          </div>
        </div>
      </template>

      <template v-else>
        <section class="hero">
          <span class="badge success-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Verified
          </span>
          <h1 class="hero-title">Secret<br>Loaded</h1>
          <p class="hero-sub">Your access token has been verified successfully.</p>
        </section>
        <div class="info-grid">
          <div class="info-card">
            <span class="info-label">Status</span>
            <span class="info-value green">Active</span>
          </div>
          <div class="info-card">
            <span class="info-label">Token (masked)</span>
            <span class="info-value mono">{{ maskedToken }}</span>
          </div>
        </div>
      </template>

    </main>
  </div>
</template>

<style scoped>
:global(*, *::before, *::after) { box-sizing: border-box; }
:global(body) { margin: 0; }

/* page */
.page {
  position: relative;
  min-height: 100vh;
  background: #f5f3ec;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.stripes {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    135deg,
    #fef9c3 0 40px,
    #1e3a8a 40px 80px
  );
  opacity: 0.13;
}

/* layout */
.container {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
}

/* header */
.header { padding: 1rem 0 3.5rem; }

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.05rem;
  color: #1e293b;
  letter-spacing: -0.01em;
}

/* hero */
.hero { margin-bottom: 1.5rem; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.32rem 0.85rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}
.success-badge { background: #dcfce7; color: #15803d; }
.error-badge   { background: #fee2e2; color: #b91c1c; }

.hero-title {
  font-size: clamp(2.8rem, 10vw, 4.5rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: #0f172a;
  margin: 0 0 1.1rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: #64748b;
  margin: 0;
  line-height: 1.65;
  max-width: 36ch;
}

/* info cards */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
  margin-top: 2.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 1.1rem;
  padding: 1.25rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.info-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #94a3b8;
}

.info-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}
.info-value.green { color: #16a34a; }
.info-value.red   { color: #dc2626; }
.info-value.mono {
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  letter-spacing: 0.06em;
  font-size: 1rem;
}

</style>
