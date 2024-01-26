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

         // target parameter represents the target of the attack.
     }
}