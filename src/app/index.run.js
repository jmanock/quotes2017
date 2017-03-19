(function() {
  'use strict';

  angular
    .module('quotes2017')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
