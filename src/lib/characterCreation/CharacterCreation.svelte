<script>
    let pointsCapacity = 10;
    let character = {
        strength: 0
    }
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
            <a>-</a>
            {Array.from({ length: 6 }, (_, i) => i < character.strength ? '★' : '☆').join('')}
            <a>+</a>
        </td>
    </tr>
    <tr>
        <td><strong>Dexterity</strong></td>
        <td>
            <a>-</a>
            {Array.from({ length: 6 }, (_, i) => i < character.strength ? '★' : '☆').join('')}
            <a>+</a>
        </td>
    </tr>
</table>

<h2>Point Allocation</h2>
<!--<p>Points: {points}</p>-->