'use strict';

angular.module('templateEditorApp').controller('MainCtrl', function($scope) {
    $scope.selected = {};

    $scope.types = ['text', 'media', 'table'];
    $scope.selectedType = $scope.types[0];

    $scope.fonts = ['Arial', 'Helvetica', 'Times New Roman'];
    $scope.selectedFont = $scope.fonts[0];

    initializeWorkspace();

    function initializeWorkspace() {
        var workspace = document.getElementById('workspace');
        var $workspace = angular.element(workspace);

        $workspace.css('height', workspace.clientWidth * 3 / 4 + 'px');
    }
});
