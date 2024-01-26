<script>
    let playerCharacter = {
        name: 'Player',
        health: 100,
        attack: 20,
        defense: 15
    };

    let enemyCharacter = {
        name: 'Enemy',
        health: 80,
        attack: 25,
        defense: 10
    };
</script>

<div>
    <div>
        <h2>{playerCharacter.name}</h2>
        <p>Health: {playerCharacter.health}</p>
        <p>Attack: {playerCharacter.attack}</p>
        <p>Defense: {playerCharacter.defense}</p>
    </div>
    <div>
        <h2>{enemyCharacter.name}</h2>
        <p>Health: {enemyCharacter.health}</p>
        <p>Attack: {enemyCharacter.attack}</p>
        <p>Defense: {enemyCharacter.defense}</p>
    </div>
</div>