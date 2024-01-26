<script>
    import {Character} from "./character.js";
    import {writable} from 'svelte/store';
    import Injuries from "./Injuries.svelte";

    const playerCharacter = writable(new Character('player')); // создание стора для playerCharacter
    const enemyCharacter = writable(new Character('enemy')); // создание стора для enemyCharacter
</script>

<div class="grid">
    <div><Injuries character={$playerCharacter}/></div>
    <div><Injuries character={$enemyCharacter}/></div>
</div>
<button on:click="{() => {
    $playerCharacter.attack($enemyCharacter); // исползование $ для доступа к текущему значению стора
    playerCharacter.set($playerCharacter); // обновление стора
    enemyCharacter.set($enemyCharacter); // обновление стора
}}">Простой удар</button>



