<script lang="ts">
  const hero = {
    title: "Welcome to the Club",
    cta: "Buy Tickets",
    img: "https://placehold.co/1600x600"
  };
</script>

<section class="mb-12">
  <div class="relative">
    <img src={hero.img} alt="Hero" class="w-full" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="bg-white/80 p-6 text-center">
        <h1 class="text-3xl font-bold mb-4">{hero.title}</h1>
        <a href="#/games" class="underline">{hero.cta}</a>
      </div>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-4">Next Games</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Array(3) as _, i}
      <a href="#/game" class="border border-black p-4 block">
        <strong>Game {i + 1}</strong><br/>
        <span>Date TBD</span>
      </a>
    {/each}
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-4">Recent News</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Array(3) as _, i}
      <a href="#/post" class="border border-black p-4 block">
        <img src={"https://placehold.co/600x400?text=News+" + (i+1)} alt="" class="mb-2" />
        <strong>News Title {i + 1}</strong>
      </a>
    {/each}
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold mb-4">Newsletter</h2>
  <form method="post" action="/api/subscribe" on:submit|preventDefault={() => alert('Stub: Phase 2')} class="flex gap-2">
    <input type="email" name="email" placeholder="you@example.com" class="border border-black p-2 flex-1" required />
    <button type="submit" class="border border-black p-2">Sign up</button>
  </form>
</section>