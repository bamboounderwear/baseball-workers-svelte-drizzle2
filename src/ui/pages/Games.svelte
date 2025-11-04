<section class="space-y-6">
  <h1 class="text-3xl font-bold">Games & Schedule</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Array(6) as _, i}
      <a href="#/game" class="border border-black p-2 block">
        <div class="font-bold">Game {i+1}</div>
        <div>Date TBD</div>
      </a>
    {/each}
  </div>
</section>