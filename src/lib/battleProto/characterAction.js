export class CharacterAction {
    constructor(name, bodyPart, action) {
        this.name = name;
        this.bodyPart = bodyPart;
        this.action = action;
    }

    perform(target) {
        this.action(this.name, this.bodyPart, target);
    }
}