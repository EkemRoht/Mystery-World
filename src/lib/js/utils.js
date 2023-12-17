export function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randArrElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

/**
 * Generates a random name by selecting random parts from given name parts.
 *
 * @param {Array<Array<string>>} nameParts - An array of arrays containing parts of the name.
 * @returns {string} A randomly generated name.
 */
export function generateRandomName(nameParts) {
    const name = nameParts.map(namePart => randArrElement(namePart));
    return name.join(' ');
}

export function nd6(n) {
    let results = [];
    if (n === 0) {
        let dice1 = randNum(1,6);
        let dice2 = randNum(1,6);
        if (dice1 && dice2 === 1) {
            results.push(dice1);
            results.push(dice2);
        } else {
            results.push(Math.min(randNum(1,6), randNum(1,6)));
        }
    } else {
        for (let i = 0; i < n; i++) {
            let roll = randNum(1,6);
            results.push(roll);
        }
    }
    let sixesCount = results.filter(dice => dice === 6).length;
    let onesCount = results.filter(dice => dice === 1).length;
    if (sixesCount >= 2) {
        return 'great_success';
    } else if (sixesCount === 1) {
        return 'success';
    } else if (Math.max(...results) >= 4) {
        return 'small_success';
    } else if (onesCount >= 2) {
        return 'big_failure';
    } else {
        return 'failure';
    }
}