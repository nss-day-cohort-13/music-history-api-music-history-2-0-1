angular.module("MusicHistory2")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "HomepageCtrl",
                controllerAs: 'home',
                templateUrl: "app/homepage/homepage.html"
            });
    });
