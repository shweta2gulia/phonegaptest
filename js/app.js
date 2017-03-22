angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.aPictures = [{ url: "https://c1.staticflickr.com/3/2188/2756233095_1dbd1ed8d6_b.jpg"},
                        { url: "https://c1.staticflickr.com/8/7353/11004245713_cd88cd9c30_b.jpg"}];
    $scope.nextPicture = function () {
        $scope.n = $scope.n + 1;
        if ($scope.n >= $scope.aPictures.length) $scope.n = 0;
        $scope.currentPicture = $scope.aPictures[$scope.n].url;
        $scope.currentAuthor = $scope.aPictures[$scope.n].author;
    };
    $scope.n = -1;
    $scope.nextPicture();
});