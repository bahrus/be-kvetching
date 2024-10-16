import { BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import { BEConfig} from 'be-enhanced/types';
import { XE} from 'xtal-element/XE.js';
import { Actions, AllProps, AP, PAP, ProPAP, POA} from '../ts-refs/be-kvetching/types';

export class BeKvetching extends BE<AP, Actions> implements Actions{
    static override get beConfig(){
        return {
            parse: true,
            //parseAndCamelize: true,
            isParsedProp: 'isParsed'
        } as BEConfig;
    }

    async register(self: this): ProPAP {
        //TODO:  this seems like a nice shareable function that could be used in other scenarios.
        //move to trans-render?
        const {enhancedElement} = self;
        const {localName} = enhancedElement;
        const inherits = enhancedElement.getAttribute('inherits') || (<any>window)['be-kvetching']?.dataset?.inherits;
        if(inherits){
            const inheritFrom = await customElements.whenDefined(inherits);
            customElements.define(localName, class extends inheritFrom{});
        }else{
            if(customElements.get(localName) === undefined){
                const {KFetch} = await import('k-fetch/k-fetch.js');
                customElements.define(localName, class extends KFetch{});
            }
        }

        
        return{
            resolved: true,
        }
    }
}

export interface BeKvetching extends AllProps{}

export const tagName = 'be-kvetching';

const xe = new XE<AP, Actions>({
    config:{
        tagName,
        isEnh: true,
        propDefaults:{
            ...propDefaults,
        },
        propInfo: {
            ...propInfo,
        },
        actions:{
            register: 'isParsed',
        }
    },
    superclass: BeKvetching,
});