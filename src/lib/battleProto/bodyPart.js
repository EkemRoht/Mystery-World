export class BodyPart {
    constructor(name, isVital=false) {
        this.name = name;
        this.isVital = isVital;
        this.woundLevel = 0; // От 0 до 3
        this.status = 'Healthy'; // Healthy or Out of Order
    }

    wound(level) {
        // Ensure the wound level is between 1 and 3
        if(level < 1 || level > 3) {
            throw new Error('Wound level should be between 1 and 3');
        }

        // Update wound level
        this.woundLevel = level;

        // Update status based on wound level
        if(level === 3) {
            this.status = 'Out of Order';
        }
    }
}