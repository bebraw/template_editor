'use strict';

angular.module('templateEditorApp').controller('MainCtrl', function($scope) {
    $scope.workspace = {
        w: null,
        h: null
    };

    $scope.elements = [];
    $scope.selected = {};

    $scope.types = ['text', 'media', 'table'];

    $scope.fonts = ['Arial', 'Monaco', 'Times New Roman'];

    $scope.addNew = addNew;
    $scope.remove = remove;

    $scope.getNumber = function(num) {
        num = parseInt(num, 10);

        if(num) {
            return new Array(num);
        }

        return [];
    };

    initializeWorkspace();

    function addNew() {
        var element = {
            type: 'text',

            x: 0.45,
            y: 0.15,
            z: 0,

            w: 0.2,
            h: 0.2,

            font: 'Arial',
            size: '100%',

            rows: 5,
            columns: 5
        };

        $scope.elements.push(element);

        select(element);
    }

    function remove() {
        for(var i = 0, len = $scope.elements.length; i < len; i++) {
            if($scope.selected === $scope.elements[i]) {
                $scope.elements.splice(i, 1);

                break;
            }
        }

        delete $scope.selected;
    }

    function select(element) {
        $scope.selected = element;
        element.selected = true;
    }

    function initializeWorkspace() {
        var workspace = document.getElementById('workspace');
        var $workspace = angular.element(workspace);

        var w = workspace.clientWidth;
        var h = workspace.clientWidth * 3 / 4;

        $workspace.css('height', h + 'px');

        $scope.workspace.w = w;
        $scope.workspace.h = h;
    }
});
