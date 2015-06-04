'use strict';

/**
 * -------------------------------------------------------------------
 *  Controllers Definitions
 * -------------------------------------------------------------------
 */

angular.module('app.controllers', [])

// ================================= DASHBOARD VIEWS ===============================================================
    .controller('MainController', function ($scope) {
    })

    .controller('PopoverHoverController', function($scope) {
        $scope.message = 'This will give you some understanding about the usage of popover';
    })

;
