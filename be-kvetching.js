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
    async register(self) {
        const { enhancedElement } = self;
        const { localName } = enhancedElement;
        if (customElements.get(localName) === undefined) {
            const { KFetch } = await import('k-fetch/k-fetch.js');
            customElements.define(localName, class extends KFetch {
            });
        }
        return {
            resolved: true,
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
        actions: {
            register: 'isParsed',
        }
    },
    superclass: BeKvetching,
});
