import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
export class BeKvetching extends BE {
    static get beConfig() {
        return {
            parse: true,
            //parseAndCamelize: true,
            isParsedProp: 'isParsed'
        };
    }
}
export const tagName = 'be-kvetching';
const xe = new XE({
    config: {
        tagName,
        isEnh: true,
        propDefaults: {
            ...propDefaults,
        },
        propInfo: {
            ...propInfo,
        },
        actions: {}
    }
});
