<script>
  import '@picocss/pico';
  import './app.css';
  import ComponentExample from "./lib/ComponentExample.svelte";
</script>

<main class="container">
  <nav>
    <hgroup>
      <h1><a href="#">Mystery World</a></h1>
      <h3>Look, Mom, I'm on TV.</h3>
    </hgroup>
  </nav>
  //just add another protos here!
  <ComponentExample/>
</main>