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

            home.editToggle = (track, album, artist) => {

              home.editing = true;
              home.editTrackName = track.name;
              home.editAlbumName = album.name;
              home.editArtistName = artist.name;
              home.editTrackId = track.id;
              home.editAlbumId = album.id;
              home.editArtistId = artist.id
            }

            home.edit = (track, album, artist) => {
              RootFactory.getApiRoot()
                  .then(
                      res => {
                        $http.patch(`${res.artists}${artist}/`, {'name': home.editArtistName})
                          .then((response) => {
                            $http.get(res.artists)
                              .then(artistRes => home.artists = artistRes.data);
                            })

                        $http.patch(`${res.albums}${album}/`, {'name': home.editAlbumName})
                          .then(response => {
                            $http.get(res.albums)
                                .then(albumRes => home.albums = albumRes.data);
                          })
                          
                        $http.patch(`${res.tracks}${track}/`, {'name': home.editTrackName})
                          .then(response => {
                            $http.get(res.tracks)
                                .then(trackRes => home.tracks = trackRes.data);
                          })
                        })
              home.editing = false;
            }


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
