<script>
    import {world} from "../js/worldStore.js";

    let logs = [];
    function evolution () {
        let arr = [];
        $world.regions.forEach(region => {
            region.locations.forEach(location => {
                let msg = `${location.name} from ${region.name}`;
                arr.push(msg);
            });
        });
        logs = arr;
    }
</script>

{#each logs as post}
    <blockquote>
        {post}
    </blockquote>
{/each}
<button on:click={evolution}>Continue</button>