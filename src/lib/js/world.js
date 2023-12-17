import Region from "./Region.js";

export default class World {
    constructor(regionsCount, worldTier) {
        this.worldTier = worldTier;
        this.regions = this.generateRegions(regionsCount, worldTier);
    }

    generateRegions(regionsCount) {
        const regions = [];
        for (let i = 1; i <= regionsCount; i++) {
            const region = new Region(i, this.worldTier);
            regions.push(region);
        }
        return regions;
    }
}