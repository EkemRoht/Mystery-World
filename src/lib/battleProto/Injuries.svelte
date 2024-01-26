<script>
    export let character = {
        name: '',
        bodyParts: {}
    };
</script>

<div>
    <div class='character-name'>Name: {character.name}</div>
    <div class='character-body-parts'>
        <p>Body parts status:</p>
        {#each Object.entries(character.bodyParts) as [part, {status, injuries}]}
            <div class='body-part'>{part}: {status} {injuries.length > 0 ? `- Injuries: ${injuries.join(', ')}` : ''}</div>
        {/each}
    </div>
</div>