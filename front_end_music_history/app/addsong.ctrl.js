angular.module('MusicHistory2')
.controller('AddSongCtrl', function($http) {
  const add = this;

  function getArtistList () {
    $http.get("http://localhost:8000/artists/").then(res => add.artistList = res.data)
  }
  getArtistList()

  function getAlbumList () {
    $http.get("http://localhost:8000/albums/").then(res => add.albumList = res.data)
  }
  getAlbumList()

  add.newArtist = () => {
    $http.post("http://localhost:8000/artists/", {name: add.newArtistName})
    .then(res => {
      getArtistList()
      add.newArtistName = '';
    }, err => console.log(err))
  }

  add.newAlbum = () => {
    $http.post("http://localhost:8000/albums/", {
      'name': add.newAlbumName,
      'artist':`http://localhost:8000/artists/${add.newAlbumArtist}/`
    })
    .then(res => {
      getAlbumList();
      add.newAlbumName = '';
      add.newAlbumArtist = '';
    }, err => console.log(err))
  }

  add.newTrack = () => {
    $http.post("http://localhost:8000/tracks/", {
      'name': add.newTrackName,
      'album':`http://localhost:8000/albums/${add.newTrackAlbum}/`
    })
    .then(res => {
      add.newTrackName = '';
      add.newTrackAlbum = '';
    }, err => console.log(err))
  }
})
