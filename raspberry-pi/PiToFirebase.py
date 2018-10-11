from firebase import firebase
import json

firebase = firebase.FirebaseApplication('https://wasdpollutecheck.firebaseio.com/', None)

myObject = {'factoryID101': {'factoryName': 'Tata Sons'} }

myJSON = json.dumps(myObject)
newJSON = str.replace(myJSON, "\\", "")
firebase.put('https://wasdpollutecheck.firebaseio.com/', 'factories', myObject)
print(newJSON)