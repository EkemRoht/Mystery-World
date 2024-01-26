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
    }
}