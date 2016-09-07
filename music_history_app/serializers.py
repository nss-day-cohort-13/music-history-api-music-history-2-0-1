from rest_framework import serializers
from music_history_app.models import Album, Artist, Track

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('name')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):

    artist = ArtistSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ('name', 'artist')


class TrackSerializer(serializers.HyperlinkedModelSerializer):

    album = AlbumSerializer(many=True, read_only=True)

    class Meta:
        model = Track
        fields = ('name', 'album')
