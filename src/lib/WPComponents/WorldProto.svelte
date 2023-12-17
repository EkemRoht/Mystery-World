<script>
    import World from "../js/world.js";
    import RegionItem from "./RegionItem.svelte";
    import WorldEvolution from "./WorldEvolution.svelte";
    import {world} from "../js/worldStore.js";
    $world = new World(6, 3);
</script>

<article>
    <header>Generation Logs</header>
    <WorldEvolution/>
</article>
<details>
    <summary>Regions List</summary>
    {#each $world.regions as region}
        <RegionItem {region} />
    {/each}
</details>