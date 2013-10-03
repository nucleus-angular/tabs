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
angular.module('nag.tabs', [
  'nag.core'
])
.directive('nagTabs', [
  '$timeout',
  '$http',
  '$compile',
  'nagDefaults',
  function($timeout, $http, $compile, nagDefaults){
    return {
      restrict: 'A',
      scope: {
        options: '=?nagTabs'
      },
      compile: function(element, attributes, transclude) {
        $(element).find('.tabs-container .tab').each(function(key, value) {
          $(element).find('.tabs-container .tab:nth-child(' + (key + 1) + ')').attr('ng-click', 'switchTab(\'' + $(this).data('tab') + '\')');
        });

        //element.html($compile(template)(scope));
        $(element).addClass('tabs');

        return function(scope, element, attributes) {
          /**
           * Options
           *
           * @ngscope
           *
           * @property {object} options
           *   @property {number} [options.defaultTab=0] The index (zero-based) of the tabs that show be visible on load
           */
          scope.options = nagDefaults.getTabsOptions(scope.options);
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
              tab = $(element).find('.tabs-container .tab:nth-child(' + (tab + 1) + ')').data('tab');
            }

            $(element).find('.tabs-container .tab').removeClass('is-active');
            $(element).find('.tabs-container .tab[data-tab="' + tab + '"]').addClass('is-active');

            $(element).find('.tab-content').removeClass('is-active');
            $(element).find('.tab-content[data-tab="' + tab + '"]').addClass('is-active');
          }

          //load the default tab
          $timeout(function(){scope.switchTab(scope.options.defaultTab);}, 0);
        }
      }
    }
  }
]);
