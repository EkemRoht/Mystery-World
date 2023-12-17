<script>
  import '@picocss/pico';
  import './app.css';
  import WorldProto from "./lib/WPComponents/WorldProto.svelte";
</script>

<main class="container">
  <nav>
    <hgroup>
      <h1><a href="#">Mystery World</a></h1>
      <h3>Look, Mom, I'm on TV.</h3>
    </hgroup>
  </nav>

  <WorldProto/>
</main>