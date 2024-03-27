import { preloadHandlebarsTemplates } from './module/templates.js';

const MODULE_ID = 'foundryvtt-module-template';

Hooks.once("init", () => {
    preloadHandlebarsTemplates();
    console.log(`${MODULE_ID} | Init Hook Reached.`)
})