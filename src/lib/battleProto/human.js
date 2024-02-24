import { Character } from './Character.js';
import { BodyPart } from './BodyPart.js';

export class Human extends Character {
    constructor(name, level) {
        super(name, level);
        this.bodyParts = {
            head: new BodyPart('Head', true),
            torso: new BodyPart('Torso', true),
            leftArm: new BodyPart('Left Arm'),
            rightArm: new BodyPart('Right Arm'),
            leftLeg: new BodyPart('Left Leg'),
            rightLeg: new BodyPart('Right Leg')
        };
    }
}