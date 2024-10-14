// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo } from 'be-enhanced/cc.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP,  AP, BAP} from './ts-refs/be-kvetching/types' */;

/**
 * @implements {Actions}
 * 
 */
class BeKvetching extends BE {

    /**
     * @type {BEConfig<BAP, Actions & IEnhancement, any>}
     */
    static config = {
        propDefaults:{
            isParsed: true
        },
        compacts:{
            when_isParsed_changes_invoke_register: 0
        }
    };

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async register(self){
        const {enhancedElement} = self;
        const {localName} = enhancedElement;
        const inherits = enhancedElement.getAttribute('inherits') || (window)['be-kvetching']?.dataset?.inherits;
        if(inherits){
            const inheritFrom = await customElements.whenDefined(inherits);
            customElements.define(localName, class extends inheritFrom{});
        }else{
            if(customElements.get(localName) === undefined){
                const {KFetch} = await import('k-fetch/k-fetch.js');
                customElements.define(localName, class extends KFetch{});
            }
        }
        return ({
            resolved: true
        })
    }
}

await BeKvetching.bootUp();
export {BeKvetching};