from django.contrib.auth.models import User
import re

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
        #go on email is good

    else:
        #error



def create_user(username,password,email):
    user = User()
    user.username = username
    #checking if username exists
    # ///
    # ///

    user.password = password
    if(len(user.password) < 8):
        #error message

    user.email = email
    check(user.email)

#def make_user_admin(username):


