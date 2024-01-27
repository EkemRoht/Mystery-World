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
            <div>{part}: {status} {injuries.length > 0 ? `- Injuries: ${injuries.join(', ')}` : ''}</div>
        {/each}
    </div>
</div>