<script>
    export let locations;  // Принимаем массив объектов локаций
</script>

<div class="location-list">
    {#each locations as location}
        <div class="location-item">
            <!--            <h1>{location.name.toUpperCase()}</h1>-->
            <p>
                {location.qiSaturation},
                {location.natureWildness},
                {location.skyFury},
            </p>
        </div>
    {/each}
</div>