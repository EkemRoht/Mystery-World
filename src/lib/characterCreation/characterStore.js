import {writable} from "svelte/store";

function createCharacterStore () {
    const { subscribe, update, set } = writable(null);

    return {
        strength: 0,
        subscribe,
        inc: (param) => {console.log(param)},
        dec: (param) => update(n => n[param] - 1)
    };
}

export const mainCharacter = createCharacterStore();