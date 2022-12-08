from django.template.backends import django
from django.test import TestCase



import pymongo
import json

db_client = pymongo.MongoClient("mongodb+srv://Admin:Y09iatWHebV04LIv@virarticles.bmkk3or.mongodb.net/?retryWrites=true&w=majority")
current_db = db_client["article"]

def dbContextArticle():
  collection = current_db["knowYourEnemy"]

  for channel in collection.find():
    Art = {
      'ArticleId' : channel['_id'],
      'ArticleName': channel['ArticleName'],
      'ArticleContent': channel['ArticleContent'],
      'ArticleAuthor':  channel['ArticleAuthor'],
      'ArticleApproved': channel['ArticleApproved'],
      'ArticleCreatedAt': channel['ArticleCreatedAt'],
      'ArticleImages': channel['ArticleImages'],
      'ArticleVideos': channel['ArticleVideos']
    }
  #return collection
def dbContextAuth():

  current_db = db_client["article"]
  collection = current_db["auth"]
  return collection

dbContextArticle()

