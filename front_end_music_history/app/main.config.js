angular.module("MusicHistory2")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "HomepageCtrl",
                controllerAs: 'home',
                templateUrl: "app/homepage/homepage.html"
            })
            .when("/addsong", {
              controller: "AddSongCtrl",
              controllerAs: "add",
              templateUrl: "app/addsong.html"
            })
      })
      .config(function($httpProvider) {
          $httpProvider.defaults.xsrfCookieName = 'csrftoken';
          $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      });
