angular.module('MusicHistory2', ['ngRoute'])

    .factory('RootFactory', ($http) => {
        let apiRoot = null;
        let httpGet = $http.get("http://localhost:8000");

        return {
            getApiRoot () {
                    return httpGet.then(res => res.data);
            }
        };
    });
