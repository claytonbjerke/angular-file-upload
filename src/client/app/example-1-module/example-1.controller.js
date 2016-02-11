/* jshint -W040 */

(function () {

    'use strict';

    angular.module('angularStarterKit').controller('example1Controller', ['$scope', 'imageUploader', example1Controller]);

    function example1Controller($scope, imageUploader) {

        console.log('Example 1 Controller');

        var vm = this;
        var emptyString = '';

        $scope.imagUrl = emptyString;

        $scope.image = emptyString;

        $scope.$watch('image', function () {
            if ($scope.image) {
                console.log('image: ', $scope.image);
//                imageUploader.uploadImage($scope.image).then(function(imageUrl) {
//                    $scope.imageUrl = imageUrl;
//                });
            }
        });
    }
}());
