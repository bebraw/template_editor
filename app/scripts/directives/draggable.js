'use strict';

angular.module('templateEditorApp').directive('draggable', function($document) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var startX = 0;
            var startY = 0;

            element.on('mousedown', function(event) {
                event.preventDefault();

                if(!element.hasClass('selected')) {
                    return;
                }

                startX = event.pageX - scope.workspace.w * parseFloat(scope.selected.x);
                startY = event.pageY - scope.workspace.h * parseFloat(scope.selected.y);

                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                var x = event.pageX - startX;
                var y = event.pageY - startY;

                scope.selected.x = x / scope.workspace.w;
                scope.selected.y = y / scope.workspace.h;

                scope.$apply();
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
            }
        }
    };
});
