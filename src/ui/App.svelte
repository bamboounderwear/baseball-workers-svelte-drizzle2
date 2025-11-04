<script lang="ts">
  import Home from './pages/Home.svelte';
  import Team from './pages/Team.svelte';
  import News from './pages/News.svelte';
  import Post from './pages/Post.svelte';
  import Games from './pages/Games.svelte';
  import Game from './pages/Game.svelte';
  import Shop from './pages/Shop.svelte';
  import Product from './pages/Product.svelte';
  import Admin from './pages/Admin.svelte';

  let route = (typeof window !== 'undefined') ? (location.hash.slice(1) || '/') : '/';

  function onHashChange() {
    route = location.hash.slice(1) || '/';
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', onHashChange);
  }

  // Simple router map
  const routes: Record<string, any> = {
    '/': Home,
    '/team': Team,
    '/news': News,
    '/post': Post,
    '/games': Games,
    '/game': Game,
    '/shop': Shop,
    '/product': Product,
    '/admin': Admin
  };
</script>

<nav class="w-full border-b border-black">
  <div class="container py-4 flex items-center justify-between">
    <a href="#/" class="font-bold">Baseball</a>
    <ul class="flex gap-4">
      <li><a href="#/team">Team</a></li>
      <li><a href="#/news">News</a></li>
      <li><a href="#/games">Games</a></li>
      <li><a href="#/shop">Shop</a></li>
      <li><a href="#/admin">Admin</a></li>
      <li><a href="#/cart">Cart (0)</a></li>
    </ul>
  </div>
</nav>

<main class="container py-8">
  {#if routes[route]}
    <svelte:component this={routes[route]} />
  {:else}
    <p>Not found.</p>
  {/if}
</main>

<footer class="w-full border-t border-black">
  <div class="container py-8">
    <div class="flex items-center justify-between">
      <span>&copy; {new Date().getFullYear()} Baseball</span>
      <ul class="flex gap-4">
        <li><a href="#" aria-label="Twitter">Twitter</a></li>
        <li><a href="#" aria-label="Instagram">Instagram</a></li>
        <li><a href="#" aria-label="YouTube">YouTube</a></li>
      </ul>
    </div>
  </div>
</footer>