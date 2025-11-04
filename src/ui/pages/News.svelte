<section class="space-y-6">
  <h1 class="text-3xl font-bold">News</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Array(6) as _, i}
      <a href="#/post" class="border border-black p-2 block">
        <img src={"https://placehold.co/600x400?text=Post+" + (i+1)} alt="" class="mb-2" />
        <div class="font-bold">Post Title {i+1}</div>
      </a>
    {/each}
  </div>
</section>