import pymongo
from bson.objectid import ObjectId
db_client = pymongo.MongoClient("mongodb+srv://Admin:Y09iatWHebV04LIv@virarticles.bmkk3or.mongodb.net/?retryWrites=true&w=majority")
current_db = db_client["article"]
collectionArt = current_db["knowYourEnemy"]
collection = current_db["auth"]


def DbGetArticleAll():
  arrayArt = []
  for channel in collectionArt.find():
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
    arrayArt.append(Art)
  return arrayArt


# def dbContextAuth():
#
#   current_db = db_client["article"]
#   return collection

def DbAddArticle(artDic):
  return collectionArt.insert_one(artDic)



def DbGetAllUsers():
  arrayUser = []
  for channel in collection.find():
    User = {
      'UserId': channel['_id'],
      'Login': channel['Login'],
      'Email': channel['Email'],
      'Password': channel['Password'],
      'IsDefined': channel['IsDefined']
    }
    arrayUser.append(User)
  return arrayUser

def UpdateUser(name):
  res = DbGetAllUsers()
  for ur in res:
    if ur["Login"] == name:
      user = ur
  result = collection.delete_one({'_id': user['_id']})
  user["IsDefined"] = True
  if result:
    resIn = collection.insert_one(user)
    return resIn
  return "Internal Erorr"


def DbGetUserById(id):
  result = collection.find_one({'_id': ObjectId(id)})
  if result != None:
    User = {
      'UserId': result['_id'],
      'Login': result['Login'],
      'Email': result['Email'],
      'Password': result['Password'],
      'IsDefined': result['IsDefined']
    }
    return User
  return result

def DbAddUser(userDic):
  return collection.insert_one(userDic);

def DbGetArticleById(id):
  result = collectionArt.find_one({'_id': ObjectId(id)})
  if result != None:
      Art = {
          'ArticleId': result['_id'],
          'ArticleName': result['ArticleName'],
          'ArticleContent': result['ArticleContent'],
          'ArticleAuthor': result['ArticleAuthor'],
          'ArticleApproved': result['ArticleApproved'],
          'ArticleCreatedAt': result['ArticleCreatedAt'],
          'ArticleImages': result['ArticleImages'],
          'ArticleVideos': result['ArticleVideos']
      }
      return Art
  return result

def DbDeleteArticleById(id):
  return collectionArt.delete_one({'_id': ObjectId(id)})

def UpdateArticle(model):
    result = collectionArt.delete_one({'_id': model['_id']})
    if result:
        resIn = collectionArt.insert_one(model)
        return resIn
    return "Internal Erorr"