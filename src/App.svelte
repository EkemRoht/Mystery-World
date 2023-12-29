<script>
  import '@picocss/pico';
  import './app.css';
  import ComponentExample from "./lib/ComponentExample.svelte";
  import CharacterCreation from "./lib/CharacterCreation.svelte";
</script>

<main class="container">
  <nav>
    <hgroup>
      <h1><a href="#">Mystery World</a></h1>
      <h3>Look, Mom, I'm on TV.</h3>
    </hgroup>
  </nav>

  <CharacterCreation/>
</main>