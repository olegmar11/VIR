from django.contrib.auth.models import User
import re
import tests
from django.http import HttpResponse

from ArticleApp.tests import DbGetAllUsers, DbAddUser, UpdateUser, DbGetArticleAll, DbDeleteArticleById, UpdateArticle, \
    DbAddArticle


class User:
    username = ""
    password = ""
    email = ""
    perms = False


regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

def check(email):
    # pass the regular expression
    # and the string into the fullmatch() method
    if (re.fullmatch(regex, email)):
        return "Good"
    else:
        return HttpResponse(404)



def create_user(username,password,email):
    user = User()
    user.username = username
    result = DbGetAllUsers()
    for ur in result:
        if ur["Login"] == username:
            return HttpResponse(404)


    user.password = password
    if(len(user.password) < 8):
        return HttpResponse(404)

    user.email = email
    check(user.email)
    DbAddUser({
      'UserId': "",
      'Login': username,
      'Email': email,
      'Password': password,
      'IsDefined': user.perms
    })
    return HttpResponse(201)


def make_user_admin(username):
    return UpdateUser(username)

def GetAllUsers():
    return DbGetAllUsers()

def GetArticles():
    return DbGetArticleAll()

def DeleteArticleById(id):
    return DbDeleteArticleById(id)

def UpdateArticleByModel(model):
    return UpdateArticle(model)

def AddArticleByModel(model):
    return DbAddArticle(model)


def LoginUser(user,password):
    res = DbGetAllUsers()
    for ur in res:
        if ur["Login"] == user & ur["Password"] == password:
            return HttpResponse(200)
    return HttpResponse(400)