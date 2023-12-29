import {writable} from "svelte/store";

function createCharacterStore (baseStat) {
    return {
        strength: writable(baseStat),
        dexterity: writable(baseStat)
    };
}

export const mainCharacter = createCharacterStore(2);