<script>
    export let region;  // import region from high
    import LocationList from "./LocationList.svelte";
    let locations = region.locations;
</script>

<article class="region">
    <header>
        <hgroup>
            <h5>
                {region.name}, {region.terrainType}
            </h5>
            <h6>
                Qi: {region.qiTier},
                Wildness: {region.wildnessTier},
                Sky Fury: {region.skyFuryTier}
            </h6>
        </hgroup>
    </header>
    <LocationList {locations} />
</article>