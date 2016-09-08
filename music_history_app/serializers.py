from rest_framework import serializers
from music_history_app.models import Album, Artist, Track

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Album
        fields = ('id', 'url', 'name','artist')


class TrackSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Track
        fields = ('id', 'url','name','album')
