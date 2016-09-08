from rest_framework import serializers
from music_history_app.models import Album, Artist, Track

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')


class TrackSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Track
        fields = ('id', 'url','name','album')


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    # tracks = TrackSerializer(many=True, read_only=True)
    class Meta:
        model = Album
        fields = ('id', 'url', 'name','artist',)
