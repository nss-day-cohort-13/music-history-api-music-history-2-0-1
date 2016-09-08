angular.module("MusicHistory2")
    .controller('HomepageCtrl', [
        '$http',
        '$timeout',
        'RootFactory',
        function($http, $timeout, RootFactory){
            const home = this;

            home.title = "I'm the home page";

            let logError = (err) => console.log("error", err);

            home.deleteTrack = function (track) {
                $http.delete(track.url)
                    .error(logError);

                // remove track from being displayed
                index = home.tracks.indexOf(track);
                home.tracks.splice(index, 1);
            };

            RootFactory.getApiRoot()
                .then(
                    res => {

                        $http.get(res.artists)
                            .then(artistRes => home.artists = artistRes.data,
                                  logError
                            );

                        $http.get(res.albums)
                            .then(albumRes => home.albums = albumRes.data,
                                  logError
                            );

                        $http.get(res.tracks)
                            .then(trackRes => home.tracks = trackRes.data,
                                  logError
                            );

                        $timeout();
                 },
                    logError
                );
        }
    ]);
