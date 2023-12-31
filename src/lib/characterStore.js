import {writable} from "svelte/store";

function createCharacterStore(baseStat) {
    return {
        strength: writable(baseStat),
        dexterity: writable(baseStat),
        incrStat: incrStat,
        decrStat: decrStat,
    };
}

/**
 * @param stat Svelte store Writable
 * @param amount integer
 */
function incrStat(stat, amount) {
    stat.update((val) => val + amount);
}

/**
 * @param stat Svelte store Writable
 * @param amount integer
 */
function decrStat(stat, amount) {
    stat.update((val) => {
        let current = val - amount
        if (current <= 0) {
            return 0;
        }
        return current;
    });
}

export const mainCharacter = createCharacterStore(2);