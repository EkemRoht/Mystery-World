import {randNum,randArrElement,generateRandomName} from "./utils.js";
import regionTypes from "../assets/regionTypes.json";
import Location from "./location.js";

export default class Region {
    constructor(id, worldTier) {
        this.id = id;
        this.terrainType = this.generateRandomTerrainType();
        this.name = this.generateName();

        this.qiTier = randNum(0,worldTier);
        this.wildnessTier = randNum(0,worldTier);
        this.skyFuryTier = randNum(0,worldTier);

        this.locations = this.generateLocations();
    }

    generateRandomTerrainType() {
        const terrainTypes = Object.keys(regionTypes);
        return randArrElement(terrainTypes);
    }
    generateName() {
        return generateRandomName(regionTypes[this.terrainType].nameParts);
    }
    generateLocations() {
        // Random locations count
        const numLocations = randNum(4, 8);
        const locations = [];

        // Creating each location
        for (let i = 0; i < numLocations; i++) {
            const location = new Location(this);
            locations.push(location);
        }

        return locations;
    }
}