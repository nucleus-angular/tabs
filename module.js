/**
 * # Tabs
 *
 * Display content in tabs
 *
 * @module nag.tabs
 */
angular.module('nag.tabs', [
  'nag.core'
])
.run([
  'nagDefaults',
  function(nagDefaults) {
    /**
     * @ignore Property definations for tab directive.
     *
     * @module nagTabs
     */
    /**
     * Options
     *
     * @ngscope
     * @property {object} options
     *   @property {number} [defaultTab=1] The tab to load by default
     */
    nagDefaults.setOptions('tabs', {
      defaultTab: 1
    });
  }
]);