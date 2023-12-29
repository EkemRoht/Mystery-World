<script>
    import { mainCharacter } from "./characterStore";

    const pointsCapacity = 10;
    let { strength, dexterity } = mainCharacter;

</script>

<style>
    /* Твои стили здесь */
</style>

<h1>Hero Characteristics System</h1>

<h2>Characteristics</h2>
<table>
    <tr>
        <td><strong>Strength</strong></td>
        <td>
            <a href="javascript:void(0)" tabindex="0" on:click={() => strength.update((val) => val - 1)}>-</a>
            {Array.from({ length: 6 }, (_, i) => i < $strength ? '★' : '☆').join('')}
            <a href="javascript:void(0)" tabindex="0" on:click={() => strength.update((val) => val + 1)}>+</a>
        </td>
    </tr>
    <tr>
        <td><strong>Dexterity</strong></td>
        <td>
            <a href="javascript:void(0)" tabindex="0" on:click={() => dexterity.update((val) => val - 1)}>-</a>
            {Array.from({ length: 6 }, (_, i) => i < $dexterity ? '★' : '☆').join('')}
            <a href="javascript:void(0)" tabindex="0" on:click={() => dexterity.update((val) => val + 1)}>+</a>
        </td>
    </tr>
</table>

<h2>Point Allocation</h2>
<!--<p>Points: {points}</p>-->