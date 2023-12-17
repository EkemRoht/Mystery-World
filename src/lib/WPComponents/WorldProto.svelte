<script>
    import World from "../js/world.js";
    import RegionItem from "./RegionItem.svelte";

    let world;

    world = new World(6, 3);
</script>

<div>
    {#each world.regions as region}
        <RegionItem {region} />
    {/each}
</div>