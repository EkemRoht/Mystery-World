<script>
  import '@picocss/pico';
  import './app.css';
  import BattleProto from "./lib/battleProto/BattleProto.svelte";
</script>

<main class="container">
  <nav>
    <hgroup>
      <h1><a href="#">Mystery World</a></h1>
      <h3>Look, Mom, I'm on TV.</h3>
    </hgroup>
  </nav>

  <BattleProto/>
</main>