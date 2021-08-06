<script>
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('loading')
  })
</script>

<slot />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>