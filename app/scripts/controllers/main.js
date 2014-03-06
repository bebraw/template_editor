'use strict';

angular.module('templateEditorApp').controller('MainCtrl', function($scope) {
    $scope.elements = [];
    $scope.selected = {};

    $scope.types = ['text', 'media', 'table'];

    $scope.fonts = ['Arial', 'Helvetica', 'Times New Roman'];
    $scope.selectedFont = $scope.fonts[0];

    $scope.addNew = addNew;
    $scope.remove = remove;

    initializeWorkspace();

    function addNew() {
        var element = {
            type: 'text',
            x: 0.45,
            y: 0.45,
            z: 0,
            w: 0.2,
            h: 0.2
        };

        $scope.elements.push(element);

        select(element);
    }

    function remove() {
        console.log('should remove selected element');
    }

    function select(element) {
        $scope.selected = element;
        element.selected = true;
    }

    function initializeWorkspace() {
        var workspace = document.getElementById('workspace');
        var $workspace = angular.element(workspace);

        $workspace.css('height', workspace.clientWidth * 3 / 4 + 'px');
    }
});
