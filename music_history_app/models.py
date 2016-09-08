from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name

class Album(models.Model):
    name = models.CharField(max_length=25)
    artist = models.ForeignKey(Artist, related_name='albums')

    def __str__(self):
        return self.name

class Track (models.Model):
    name = models.CharField(max_length=25)
    album = models.ForeignKey(Album, related_name='tracks')

    def __str__(self):
        return self.name
