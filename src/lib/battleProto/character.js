export class Character {
    constructor(name) {
        this.name = name;
        this.bodyParts = {
            'leftHand': {
                'status': 'fine',
                'injuries': []
            },
            'rightHand': {
                'status': 'fine',
                'injuries': []
            },
            'leftLeg': {
                'status': 'fine',
                'injuries': []
            },
            'rightLeg': {
                'status': 'fine',
                'injuries': []
            },
            'torso': {
                'status': 'fine',
                'injuries': []
            },
            'head': {
                'status': 'fine',
                'injuries': []
            }
        };
        this.characteristics = {
            'Agility': {
                'masteryLevel': 0,
                'masteryCircle': 0
            }
        };
        this.skills = {
            'Evasion': {
                'relatedCharacteristic': 'Agility',
                'masteryLevel': 0,
                'masteryCircle': 0
            }
        };
    }

    attack(target) {
        // Get a list of the target's body parts
        const bodyParts = Object.keys(target.bodyParts);

        // Choose a random body part to injure
        const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];

        // Add a new injury to the selected body part
        target.bodyParts[randomBodyPart].injuries.push('wound');

        // Check the overall status of the injured body part
        if (target.bodyParts[randomBodyPart].injuries.length > 0) {
            target.bodyParts[randomBodyPart].status = 'injured';
        }
        console.log(target);
    }
}