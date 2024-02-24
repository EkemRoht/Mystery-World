<script>
    export let character = {
        name: '',
        bodyParts: {}
    };
</script>

<div>
    <div>Name: {character.name}</div>
    <div>
        <p>Body parts status:</p>
        {#each Object.entries(character.bodyParts) as [part, {status, injuries}]}
            {#if (injuries.length > 0)}
                <div>{part}: - Injuries: {injuries.join(', ')}</div>
            {/if}
        {/each}
    </div>
</div>