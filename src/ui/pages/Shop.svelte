<section class="space-y-6">
  <h1 class="text-3xl font-bold">Shop</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each Array(8) as _, i}
      <a href="#/product" class="border border-black p-2 block">
        <img src={"https://placehold.co/600x600?text=Product+" + (i+1)} alt="" class="mb-2" />
        <div class="font-bold">Product {i+1}</div>
      </a>
    {/each}
  </div>
</section>