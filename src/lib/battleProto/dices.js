export function rollDice(count) {
    let result;

    if (count === 0) {
        // Roll 2 dice and choose the lowest result
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        result = Math.min(roll1, roll2);
    } else {
        // Roll dice and choose the highest result
        const rolls = [];
        for (let i = 0; i < count; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        console.log(rolls.join());


        const isDoubleSix = rolls.filter(roll => roll === 6).length > 1;
        result = isDoubleSix ? 12 : Math.max(...rolls);
    }

    switch (result) {
        case 1:
        case 2:
        case 3:
            return 'failure';
        case 4:
        case 5:
            return 'small success';
        case 6:
            return 'success';
        case 12:
            return 'big success';
    }
}