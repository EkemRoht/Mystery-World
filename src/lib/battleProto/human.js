import { Character } from './Character.js';
import { BodyPart } from './BodyPart.js';
import { CharacterAction } from './characterAction.js';

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

        const actionHandler = (actionName, performer, target) => {
            console.log(`${this.name} executes ${actionName} with ${performer.name} to ${target}!`);
            // Additional logic could go here
        };

        this.actions = {
            punchWithLeft: new CharacterAction('punch with left arm', this.bodyParts.leftArm, actionHandler),
            punchWithRight: new CharacterAction('punch with right arm', this.bodyParts.rightArm, actionHandler),
            kickWithLeft: new CharacterAction('kick with left leg', this.bodyParts.leftLeg, actionHandler),
            kickWithRight: new CharacterAction('kick with right leg', this.bodyParts.rightLeg, actionHandler),
            bite: new CharacterAction('bite', this.bodyParts.head, actionHandler)
        };
    }

    act(name, target) {
        let action = this.actions[name];
        if (action) {
            if (action.bodyPart.status !== 'disabled') {
                action.perform(target);
            } else {
                console.log(`The body part for action "${name}" is disabled`);
            }
        } else {
            console.log(`Action "${name}" is not available`);
        }
    }
}