import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from firebase_admin import db


cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://lucpc-edf35-default-rtdb.firebaseio.com/'})


# for user in auth.list_users().iterate_all():
#     print('User: ' + user.uid)



users = db.reference('users')
print(users.get())