import Region from "./Region.js";
import {nd6, randArrElement} from "./utils.js";

export default class World {
    constructor(regionsCount, worldTier) {
        this.worldTier = worldTier;
        this.regions = this.generateRegions(regionsCount, worldTier);

        this.logs = [];
        this.logs.push(`>> SETTLEMENT PHASE`);
        this.regions.forEach(region => {
            let settlementLocation = randArrElement(region.locations);
            let entry = `Humans came to ${settlementLocation.name} in ${region.name} to establish a settlement. `
            let occupancyTry = nd6(this.worldTier - region.wildnessTier);
            switch (occupancyTry) {
                case 'great_success':
                    settlementLocation.type = 'small_village';
                    entry += `They were incredibly successful and in no time a village grew up here. (T1W)`;
                    break;
                case 'success':
                    settlementLocation.type = 'outpost';
                    entry += `They succeeded and established an outpost. (T0S)`;
                    break;
                case 'small_success':
                    entry += `They faced many obstacles but established an outpost. (T0W)`;
                    break;
                default:
                    entry += `But all died a horrible death.`;
            }
            this.logs.push(entry);
        });
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