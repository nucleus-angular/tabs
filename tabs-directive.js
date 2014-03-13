/**
 * # Tabs
 *
 * This directive allows you to create a tabbed interface.
 *
 * EXAMPLE TODO
 *
 * @todo: add ajax supported tabs
 *
 * @module nag.tabs
 * @ngdirective nagTabs
 *
 * @nghtmlattribute {object} nag-tabs Tells AngularJS this element is a tabs component and object passed in overrite default values for $scope.options
 */
angular.module('nag.tabs.configurator', [
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
angular.module('nag.tabs')
.directive('nagTabs', [
  '$timeout',
  '$http',
  '$compile',
  'nagDefaults',
  'nagHelper',
  function($timeout, $http, $compile, nagDefaults, nagHelper){
    return {
      restrict: 'A',
      scope: {
        options: '=?nagTabs'
      },
      templateUrl: nagHelper.templateUrl,
      compile: function(element, attributes, transclude) {
        //let automatically attached click events for the tabs
        element.find('.tabs-container .tab').each(function(key, value) {
          element.find('.tabs-container .tab:nth-child(' + (key + 1) + ')').attr('ng-click', 'switchTab(\'' + $(this).data('tab') + '\')');
        });

        element.addClass('tabs');

        return function postLink(scope, element, attributes) {
          /**
           * Options
           *
           * @ngscope
           *
           * @property {object} options
           *   @property {number} [options.defaultTab=0] The index (zero-based) of the tabs that show be visible on load
           */
          scope.options = nagDefaults.getOptions('tabs', scope.options);
          var $element = $(element);

          /**
           * Switch active tab
           *
           * @method switchTab
           *
           * @ngscope
           *
           * @param {string|int} tab Tab to switch to
           */
          scope.switchTab = function(tab) {
            if(angular.isNumber(tab)) {
              tab = $(element).find('.tabs-container .tab:nth-child(' + tab + ')').data('tab');
            }

            $(element).find('.tabs-container .tab').removeClass('is-active');
            $(element).find('.tabs-container .tab[data-tab="' + tab + '"]').addClass('is-active');

            $(element).find('.tab-content').removeClass('is-active');
            $(element).find('.tab-content[data-tab="' + tab + '"]').addClass('is-active');
          };

          //load the default tab
          $timeout(function(){scope.switchTab(scope.options.defaultTab);}, 0);
        };
      }
    }
  }
]);
