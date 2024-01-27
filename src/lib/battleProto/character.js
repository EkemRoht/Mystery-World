class BodyPart {
    constructor() {
        this.status = 'fine';
        this.injuries = [];
    }
}

class Param {
    constructor() {
        this.mastery = 2;
        this.circle = 0;
    }
}

class Skill extends Param {
    constructor(relatedParam) {
        super();
        this.relatedParam = relatedParam;
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
        this.characteristics = this.initializeParams(['agility']);
        this.skills = this.initializeSkills([{
            skillName: 'martial',
            relatedParam: this.characteristics['agility']
        }]);
    }

    initializeBodyParts(parts) {
        return parts.reduce((acc, part) => ({
            ...acc,
            [part]: new BodyPart(),
        }), {});
    }

    initializeParams(characteristics) {
        return characteristics.reduce((acc, characteristic) => ({
            ...acc,
            [characteristic]: new Param(),
        }), {});
    }

    initializeSkills(skills) {
        return skills.reduce((acc, {skillName, relatedParam}) => ({
            ...acc,
            [skillName]: new Skill(relatedParam),
        }), {});
    }
}