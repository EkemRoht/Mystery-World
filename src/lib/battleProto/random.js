export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomItem(array) {
    const randomIndex = getRandomNumber(array.length - 1);
    return array[randomIndex];
}