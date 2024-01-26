<script>
    let showComp = false;
    function getRandomPlantJoke() {
        const funnyPlantJokes = [
            "Why are plants excellent programmers? Because they truly understand the branching of code!",
            "What's a programmer's favorite plant? JavaScriptar!",
            "Why don't plants become programmers? They don't like root access!",
            "How do plants communicate in the programming world? Through leaf mail!",
            "Why don't plants like to code in Python? They prefer the green programming language!",
            "Which programming language do plants choose? It's self-evident!",
            "Why are plants great for working with databases? They have an excellent root storage system!",
            "How do flowers program? They use petal code!",
            "How do plants mark their programming mistakes? They simply grow a new version!",
            "Why don't plants use mobile apps? They have enough 'flora' and 'fauna' for communication!"
        ];
        const randomIndex = Math.floor(Math.random() * funnyPlantJokes.length);
        return funnyPlantJokes[randomIndex];
    }
    function showComponent() {
        showComp = !showComp;
    }
</script>
<button on:click={showComponent}>Example Proto</button>
{#if showComp}
    <article>
        <p>It's just proto example.</p>
        <p>Some jokes from GPT: {getRandomPlantJoke()}</p>
    </article>
{/if}