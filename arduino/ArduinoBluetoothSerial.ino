#include<SoftwareSerial.h>
#include <OneWire.h> 
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 5
OneWire oneWire(ONE_WIRE_BUS);

DallasTemperature sensors(&oneWire);

int smoke=0;
int mq136=0;
int mq7=0;
int noise=0;
int temp=0;

SoftwareSerial BT(2,3);
void setup() {
  BT.flush();
  pinMode(4,INPUT);             // Sound
  pinMode(3,INPUT);            // IR
  pinMode(A0,INPUT);          // MQ136
  pinMode(5,INPUT);           // DS18B20
  pinMode(A1,INPUT);          // MQ7
  Serial.begin(9600);
  BT.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
 mq136=analogRead(A0);        
 noise=digitalRead(4);
 smoke=digitalRead(3);
 temp=sensors.getTempCByIndex(0);
 mq7=analogRead(A1);
 Serial.println("MQ136:"+String(mq136)+","+"IR"+String(smoke)+","+"Sound Sensor:"+String(noise)+","+"MQ7:"+String(mq7)+","+"Temperature:"+String(temp));
 BT.println(String(mq136)+","+String(smoke)+","+String(noise)+","+String(mq7)+","+String(temp));
 delay(5000);
}
