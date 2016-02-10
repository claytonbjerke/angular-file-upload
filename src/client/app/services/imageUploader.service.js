var testImage = 'http://www.hdwallpapersnew.net/wp-content/uploads/2015/08/animal-panda-bear-widescreen-high-definition-wallpaper-for-background-free-photos-200x200.jpeg';

(function () {

    'use strict';

    angular.module('angularStarterKit').factory('imageUploader', ['$q', 'Upload', imageUploader]);

    function imageUploader($q, Upload) {

        return {
            uploadImage: uploadImage
        };


        function uploadImage(image) {

            console.log('Image: ', image);

            if (!image) {
                console.log('No image to upload');
                return;
            }

            if (image.$error) {
                console.log('Error with image!', image.$error);
                return;
            }

            var deferred = $q.defer();

            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {
                    file: image
                }
            }).then(function (response) {

                deferred.resolve(testImage);
                console.log('Response: ', response);

            });

            return deferred.promise;
        }
    }
}());
