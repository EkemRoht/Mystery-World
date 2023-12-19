import {generateRandomName, nd6, randArrElement, randNum} from "./utils.js";
import locationTypes from "../assets/locationTypes.json";

export default class Location {
    constructor (region) {
        this.qiSaturation = this.getQiSaturation(region.qiTier);
        this.natureWildness = this.getNatureWildness(region.wildnessTier);
        this.skyFury = this.getSkyFury(region.skyFuryTier);
        const locationType = this.generateRandomLocationType(region.terrainType);
        this.type = locationType.type;
        this.name = this.generateName(this.type);
        this.size = randNum(1, 6);
    }

    generateName(type) {
        return generateRandomName(locationTypes[type].nameParts);
    }
    getQiSaturation (tier) {
        switch (nd6(tier)) {
            case 'great_success':
                return 'extreme_high_qi';
            case 'success':
                return 'high_qi';
            case 'small_success':
                return 'common_qi';
            case 'failure':
                return 'low_qi';
            case 'big_failure':
                return 'empty_qi';
        }
    }
    getNatureWildness (tier) {
        switch (nd6(tier)) {
            case 'great_success':
                return 'extreme_high_wildness';
            case 'success':
                return 'high_wildness';
            case 'small_success':
                return 'common_wildness';
            case 'failure':
                return 'tame_nature';
            case 'big_failure':
                return 'high_tame_nature';
        }
    }
    getSkyFury (tier) {
        switch (nd6(tier)) {
            case 'great_success':
                return 'extreme_high_fury';
            case 'success':
                return 'high_fury';
            case 'small_success':
                return 'neutral_sky';
            case 'failure':
                return 'pleased_sky';
            case 'big_failure':
                return 'high_pleased_sky';
        }
    }
    generateRandomLocationType(terrainType) {
        const availableLocations = Object.entries(locationTypes)
            .filter(([key, value]) => value.availableTerrain.includes(terrainType))
            .map(([key, value]) => ({ type: key, typeName: value.typeName }));
        return randArrElement(availableLocations);
    }
}