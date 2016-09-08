angular.module("MusicHistory2")
    .controller('HomepageCtrl', [
        '$http',
        '$timeout',
        'RootFactory',
        function($http, $timeout, RootFactory){
            const home = this;

            home.title = "I'm the home page";

            RootFactory.getApiRoot()
                .then(
                    res => {
                        home.apiRoot = res;
                        $timeout();
                 },
                    err => console.log("error", err)
                );
        }
    ]);
