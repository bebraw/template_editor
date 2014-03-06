'use strict';

// http://blog.parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html
angular.module('templateEditorApp').directive('draggable', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var el = element[0];

            el.draggable = true;

            el.addEventListener(
                'dragstart',
                function(e) {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', this.id);

                    this.classList.add('drag');

                    return false;
                },
                false
            );

            el.addEventListener(
                'dragend',
                function(e) {
                    var w = scope.workspace.w;
                    var h = scope.workspace.h;

                    console.log(h, scope.selected.y, e, e.offsetY);

                    scope.selected.x = (w * scope.selected.x + e.offsetX) / w;

                    // XXXXX: figure this out
                    scope.selected.y = e.offsetY / h;

                    this.classList.remove('drag');

                    scope.$apply();

                    return false;
                },
                false
            );
        }
    };
});
