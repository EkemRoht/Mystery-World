<script>
    import {world} from "../js/worldStore.js";
    import {nd6, randArrElement} from "../js/utils.js";

    let logs = [];
    function evolution () {
        let arr = [];
        arr.push(`>> SETTLEMENT PHASE`);
        $world.regions.forEach(region => {
            let settlementLocation = randArrElement(region.locations);
            let entry = `Humans came to ${settlementLocation.name} in ${region.name} to establish a settlement. `
            let occupancyTry = nd6($world.worldTier - region.wildnessTier);
            switch (occupancyTry) {
                case 'great_success':
                    entry += `They were incredibly successful and in no time a village grew up here. (T1W)`
                    break;
                case 'success':
                    entry += `They succeeded and established an outpost. (T0S)`;
                    break;
                case 'small_success':
                    entry += `They faced many obstacles but established an outpost. (T0W)`
                    break;
                default:
                    entry += `But all died a horrible death.`;
            }
            // let msg = `${nd6($world.worldTier - region.wildnessTier)}`;

            // region.locations.forEach(location => {
            //     let msg = `${location.name} from ${region.name}`;
            //     arr.push(msg);
            // });
            arr.push(entry)
        });
        logs = arr;
    }
    evolution()
</script>

{#each logs as post}
    <p>
        {post}
    </p>
{/each}
<!--<button on:click={evolution}>Continue</button>-->