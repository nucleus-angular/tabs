/**
 * todo: add ajax supported tabs
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
          scope.options = nagDefaults.getTabsOptions(scope.options);
          var $element = $(element);
          scope.switchTab = function(tab) {
            if(angular.isNumber(tab)) {
              //todo: this should work
              //tab = $(element).find('.tabs li:nth-child(' + tab + ')').data('tab');
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
