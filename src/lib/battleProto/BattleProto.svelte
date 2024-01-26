<script>
	import {Character} from "./character.js";

	let playerCharacter = new Character('player');
	let enemyCharacter = new Character('enemy');
</script>

<button on:click="{() => playerCharacter.attack(enemyCharacter)}">Простой удар</button>