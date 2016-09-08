angular.module("MusicHistory2")
    .controller('HomepageCtrl', [
        '$http',
        '$timeout',
        'RootFactory',
        function($http, $timeout, RootFactory){
            const home = this;

            home.title = "I'm the home page";

            home.deleteTrack = function (track) {
                $http.delete(track.url);

                // remove track from being displayed
                index = home.tracks.indexOf(track);
                home.tracks.splice(index, 1);
            };

            RootFactory.getApiRoot()
                .then(
                    res => {
                        home.apiRoot = res;

                        $http.get(res.artists)
                            .then(artistRes => home.artists = artistRes.data);

                        $http.get(res.albums)
                            .then(albumRes => home.albums = albumRes.data);

                        $http.get(res.tracks)
                            .then(trackRes => home.tracks = trackRes.data);

                        $timeout();
                 },
                    err => console.log("error", err)
                );
        }
    ]);
