<script>
	import {Character} from "./character.js";

	let playerCharacter = new Character('player');
	let enemyCharacter = new Character('enemy');
</script>

<main>
	<div>
		<h2>Player</h2>
		<p>Name: {playerCharacter.name}</p>
	</div>

	<div>
		<h2>Enemy</h2>
		<p>Name: {enemyCharacter.name}</p>
	</div>
</main>