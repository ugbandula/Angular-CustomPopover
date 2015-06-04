'use strict';

/**
 * -------------------------------------------------------------------
 *  Directive Definitions
 * -------------------------------------------------------------------
 */

angular.module('app.directives', [])

.directive('customPopover', function ($compile, $templateCache) {
    var getTemplate = function (contentType) {
        var template = '';
        switch (contentType) {
            case 'contentType1':
                template = $templateCache.get("customPopoverContent1.html");
                break;
            case 'contentType2':
                template = $templateCache.get("customPopoverContent2.html");
                break;
        }
        return template;
    };

    return {
        restrict: "A",
        scope: {
            contentType : '@',
            title       : '@'
        },
        link: function (scope, element, attrs) {
            var contentType = scope.contentType;
            var popOverContent = getTemplate(contentType);
            popOverContent = $compile("<div>" + popOverContent+"</div>")(scope);

            var options = {
                //title       : title,
                content     : popOverContent,
                placement   : "bottom",
                html        : true,
                date        : scope.date,
                trigger     : "hover"
            };
            $(element).popover(options);
        }
    };
})

;

