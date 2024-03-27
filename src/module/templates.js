/**
 * Define a set of template paths to pre-load
 *
 * Pre-loaded templates are compiled and cached for fast access when rendering
 *
 * @returns {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
    const modTemplatePaths = [
        // New Sheet Partials
    ];

    return loadTemplates(modTemplatePaths);
};
