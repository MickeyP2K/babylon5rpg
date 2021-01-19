/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    'systems/babylon5rpg/templates/actor/tabs/actor-inventory.html',
    'systems/babylon5rpg/templates/actor/tabs/vehicle-inventory.html',
    'systems/babylon5rpg/templates/actor/tabs/actor-systems.html',
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
