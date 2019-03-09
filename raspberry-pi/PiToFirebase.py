from firebase import firebase

firebase = firebase.FirebaseApplication('https://wasdpollutecheck.firebaseio.com/', None)

myObject = {'factoryID101': {'factoryName': 'Tata Sons', 'factoryEstablished' : '1956', 'smokePPM': 272, 'noisePollution': 0, 'irSensor': 400, 'phSensor': 2.7} }

firebase.put('https://wasdpollutecheck.firebaseio.com/', 'factories', myObject)