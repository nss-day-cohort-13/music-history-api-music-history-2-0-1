angular.module("MusicHistory2")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "HomepageCtrl",
                templateUrl: "app/homepage/homepage.html"
            });
    });
