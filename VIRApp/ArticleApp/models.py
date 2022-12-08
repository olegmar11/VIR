from django.db import models

# Create your models here.

class Article(models.Model):
    ArticleId = models.AutoField(primary_key=True)
    ArticleName = models.CharField(max_length=100)
    ArticleContent = models.CharField(max_length=10000)
    ArticleAuthor = models.CharField(max_length=50, default='Admin')
    ArticleApproved = models.BooleanField(default=False)
    ArticleCreatedAt = models.DateTimeField("Created At", auto_now_add=True)
    ArticleImg = models.CharField(max_length = 300)
    ArticleVideo = models.CharField(max_length = 100)



