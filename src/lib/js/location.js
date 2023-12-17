import { nd6 } from "./utils.js";

export default class Location {
    constructor (qiTier, wildnessTier, skyFuryTier) {
        this.qiSaturation = this.getQiSaturation(qiTier);
        this.natureWildness = this.getNatureWildness(wildnessTier);
        this.skyFury = this.getSkyFury(skyFuryTier);
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
}