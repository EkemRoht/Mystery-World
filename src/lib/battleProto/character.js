class BodyPart {
    constructor() {
        this.status = 'fine';
        this.injuries = [];
    }
}

class Characteristic {
    constructor() {
        this.masteryLevel = 0;
        this.masteryCircle = 0;
    }
}

class Skill extends Characteristic {
    constructor(relatedCharacteristic) {
        super();
        this.relatedCharacteristic = relatedCharacteristic;
    }
}

export class Character {
    constructor(name) {
        this.name = name;
        this.bodyParts = this.initializeBodyParts([
            'leftHand',
            'rightHand',
            'leftLeg',
            'rightLeg',
            'torso',
            'head'
        ]);
        this.characteristics = this.initializeCharacteristics(['Agility']);
        this.skills = this.initializeSkills([{
            skillName: 'Evasion',
            relatedCharacteristic: this.characteristics['Agility']
        }]);
    }

    initializeBodyParts(parts) {
        return parts.reduce((acc, part) => ({
            ...acc,
            [part]: new BodyPart(),
        }), {});
    }

    initializeCharacteristics(characteristics) {
        return characteristics.reduce((acc, characteristic) => ({
            ...acc,
            [characteristic]: new Characteristic(),
        }), {});
    }

    initializeSkills(skills) {
        return skills.reduce((acc, {skillName, relatedCharacteristic}) => ({
            ...acc,
            [skillName]: new Skill(relatedCharacteristic),
        }), {});
    }
}