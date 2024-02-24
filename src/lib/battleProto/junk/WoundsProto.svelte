<script>
    import {Character} from "./character.js";
    import {writable} from 'svelte/store';
    import Injuries from "./Injuries.svelte";
    import {rollDice} from "../dices.js";

    const playerCharacter = writable(new Character('player'));
    const enemyCharacter = writable(new Character('enemy'));
    let selectedBodyPart = '';
    $: logs = [];

    function unarmedAttack() {
        const {martial} = $playerCharacter.skills;
        const hit = rollDice(martial.mastery);
        const target = $enemyCharacter;
        // let efficiency = 3;
        switch (hit) {
            case 'success':
                logs.unshift(`Player attacked ${selectedBodyPart} and wounded enemy.`);
                target.bodyParts[selectedBodyPart].injuries.push('wound');
                break;
        }

        enemyCharacter.set(target);
        logs = [...logs];
    }
</script>

<div class="grid">
    <div><Injuries character={$playerCharacter}/></div>
    <div><Injuries character={$enemyCharacter}/></div>
</div>
<select bind:value={selectedBodyPart}>
    {#each Object.keys($enemyCharacter.bodyParts) as part}
        <option value={part}>{part}</option>
    {/each}
</select>
<button on:click="{unarmedAttack}">Punch</button>
{#each logs as log}
    <p>{log}</p>
{/each}