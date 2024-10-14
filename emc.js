// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC, EventListenerOrFn} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-calculating/types' */;

/**
 * @type {Partial<EMC<any, AP>>}
 */
export const emc = {
    base: 'be-kvetching',
    enhPropKey: 'beKvetching',
    importEnh: async () => {
        const {BeKvetching} =         
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-kvetching.js'));
        return BeKvetching
    }
}

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);