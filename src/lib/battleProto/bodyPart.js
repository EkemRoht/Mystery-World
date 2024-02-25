export class BodyPart {
    constructor(name, isVital=false) {
        this.name = name;
        this.isVital = isVital;
        this.woundLevel = 0; // от 0 до 3
        this.status = 'Healthy'; // Healthy or Disabled
    }

    wound(level) {
        if(level < 1 || level > 3) {
            throw new Error('Wound level should be between 1 and 3');
        }

        this.woundLevel = level;

        if(level === 3) {
            this.status = 'Disabled';
        }
    }
}