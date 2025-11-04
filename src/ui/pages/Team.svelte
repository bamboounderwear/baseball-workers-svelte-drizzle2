<section class="space-y-6">
  <header>
    <h1 class="text-3xl font-bold">Team</h1>
    <p class="text-lg">Meet the players</p>
  </header>
  <p>About team description goes here. (Phase 2)</p>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each Array(8) as _, i}
      <div class="border border-black p-2">
        <img src={"https://placehold.co/400x400?text=Player+" + (i+1)} alt="" class="mb-2" />
        <div class="font-bold">Player {i+1}</div>
        <div class="text-sm">Short bio...</div>
      </div>
    {/each}
  </div>
</section>