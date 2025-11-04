<section class="space-y-6">
  <h1 class="text-3xl font-bold">Admin</h1>
  <p>Phase 2 will add auth, design tokens, analytics, CRM.</p>
  <div class="border border-black p-4">
    <h2 class="font-bold mb-2">Design Tokens (Preview)</h2>
    <button class="border border-black px-2 py-1" on:click={async () => {
      const r = await fetch('/api/tokens');
      const j = await r.json();
      alert(JSON.stringify(j, null, 2));
    }}>Load tokens</button>
  </div>
</section>