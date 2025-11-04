<section class="space-y-4">
  <h1 class="text-3xl font-bold">Game Title</h1>
  <div>Date • Opponent • Venue</div>
  <h2 class="text-xl font-bold mt-4">Tickets</h2>
  <table class="w-full border border-black">
    <thead>
      <tr>
        <th class="border border-black p-2 text-left">Section</th>
        <th class="border border-black p-2 text-left">Row</th>
        <th class="border border-black p-2 text-left">Seat</th>
        <th class="border border-black p-2 text-left">Price</th>
        <th class="border border-black p-2 text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      {#each Array(3) as _, i}
        <tr>
          <td class="border border-black p-2">A</td>
          <td class="border border-black p-2">B</td>
          <td class="border border-black p-2">
            <select class="border border-black p-1">
              <option>1</option><option>2</option><option>3</option>
            </select>
          </td>
          <td class="border border-black p-2">$00.00</td>
          <td class="border border-black p-2"><button class="border border-black px-2 py-1">Add</button></td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>