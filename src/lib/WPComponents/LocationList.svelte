<script>
    export let locations;  // Принимаем массив объектов локаций
</script>

<div class="location-list">
    {#each locations as location}
        <div class="location-item">
            <strong>{location.name}</strong>
            <p>
                {location.qiSaturation},
                {location.natureWildness},
                {location.skyFury}
            </p>
        </div>
    {/each}
</div>