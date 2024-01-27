<script>
    import {Character} from "./character.js";
    import {writable} from 'svelte/store';
    import Injuries from "./Injuries.svelte";

    const playerCharacter = writable(new Character('player')); // создание стора для playerCharacter
    const enemyCharacter = writable(new Character('enemy')); // создание стора для enemyCharacter

    // Отдельная функция безоружной атаки
    function unarmedAttack() {
        // const bodyPart = getRandomItem(bodyParts); // выбираем случайную часть тела для атаки
        // const targetCharacter = Math.random() < 0.5 ? playerCharacter : enemyCharacter; // выбор цели атаки случайным образом
        // const target = $targetCharacter;
        //
        // // Атакуем выбранную часть тела
        // if(!target.bodyParts[bodyPart]) {
        //     target.bodyParts[bodyPart] = {status: 'healthy', injuries: []};
        // }
        //
        // const attackSuccess = Math.random() < 0.5; // 50% шанс успеха атаки
        // if (attackSuccess) {
        //     target.bodyParts[bodyPart].status = 'damaged';
        //     target.bodyParts[bodyPart].injuries.push('cut');
        // }
        //
        // targetCharacter.set(target); // Применяем изменения к целевому персонажу
    }
</script>

<div class="grid">
    <div><Injuries character={$playerCharacter}/></div>
    <div><Injuries character={$enemyCharacter}/></div>
</div>
<button on:click="{unarmedAttack}">Простой удар</button>