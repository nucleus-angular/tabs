angular.module('nag.tabs', [
  'nag.core'
])
.run([
  'nagDefaults',
  function(nagDefaults) {
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