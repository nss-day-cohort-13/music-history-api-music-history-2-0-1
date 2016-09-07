from .models import Track, Album, Artist
from rest_framework import viewsets
from .serializers import AlbumSerializer, ArtistSerializer, TrackSerializer


class AlbumList(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class ArtistList(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class TrackList(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
