dataFromPiArray = [[1,2,3],[4,5,6],[7,8,9]]

from firebase import firebase

firebase = firebase.FirebaseApplication('https://wasdpollutecheck.firebaseio.com/', None)

myObject = {'factoryID101': {'factoryName': 'Tata Sons', 'factoryEstablished' : '1956', 'smokePPM': 26} }

firebase.put('https://wasdpollutecheck.firebaseio.com/', 'factories', myObject)