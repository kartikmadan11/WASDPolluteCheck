# WASDPolluteCheck
### What does WASDPolluteCheck do?

Textile Industries, along with other major industries generate effluents contributing
to the pollution. These effluents can be released as a form of pollution of water, air
or even noise. It is evident that a modern approach is needed to curb such emissions
into the environment.
A Green Auditing System: WASD PolluteCheck is a modern and innovative
approach to devise a system that can audit industries on the basis of their pollution
emissions.
WASD stands for Water, Air, Sound and Data Collection.

- __Water__: Water emissions from factories and industries can be toxic and have
hazardous and untreated waste that can make its way to rivers and cause
severe health problems for any life form in direct relation to that water body.
The water could also damage soil if it is contact with the emissions.
- __Air__: Many factories and industries release soot, greenhouse gases and PM
2.5-PM 10 particles into the atmosphere making a contribution to highly
severe environmental conditions.
- __Sound__: High decibel sounds can cause problems for human and animal life
  if the source industries are located inside cities
- __Data Collection and Analysis__: The problems caused by pollution
   of various types enlisted above can be curbed by employing this part of the
  system. This will be done as follows:
  - __The Data Collection Unit__ will place various sensors to collect analog data from various sources including chimneys, water outlets.       The sensors used for this unit would be MQ5 Gas Sensor, pH Meter, Noise Measurement Sensor, and various others. This analog data is      relayed by the slave NodeMCU to the master Raspberry Pi via Bluetooth.
  - __The Data Analysis Unit__ will employ a TensorFlow Lite Model trained
    on a Neural Network inside the Raspberry Pi to compute the damages
    incurred to the environment. This amount of damages along with the
    merit score of the factory being audited is transmitted to the FireBase
    Realtime Database.

An Android application is used to display this data, including the damages incurred
in real time via the JSON from the Firebase server.

### What is included in the product?

- RaspberryPi Master Modules with TensorFlowLite Neural Network model
- NodeMCU Slave Modules with:
  - MQ5 Sensor
  - Temperature Sensor
  - pH Sensor 
  - Noise Sensor
  - LDR Sensor
- FireBase Realtime Database 
- Mobile Application 
 
### System Architechure
![FlowChart](https://github.com/magiciankartik/WASDPolluteCheck/blob/master/readme/Flowchart.jpg)

### Technologies and Dependencies needed to run WASDPolluteCheck

* [TensorFlow] - An open source machine learning framework for everyone
* [FireBase RealTime Database] - Google's mobile platform for quickly developing high-quality apps
* [Google Cloud Platform] - A suite of cloud computing services that runs on the same infrastructure that Google
* [Docker] - A computer program that performs operating-system-level virtualization, also known as "containerization"
* [Android] - Android is a mobile operating system developed by Google
* [Raspbian] - Raspbian is a free operating system based on Debian optimized for the Raspberry Pi hardware

[TensorFlow]: <https://www.tensorflow.org>
[FireBase RealTime Database]: <https://firebase.google.com>
[Google Cloud Platform]: <https://cloud.google.com>
[Docker]: <https://www.docker.com>
[Android]: <https://www.android.com>
[Raspbian]: <https://www.raspbian.org>
