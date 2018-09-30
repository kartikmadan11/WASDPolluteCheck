#include<SoftwareSerial.h>
int smoke=0;
int ppm=0;
int noise=0;

SoftwareSerial BT(2,3);
void setup() {
  BT.flush();
  pinMode(4,INPUT);
  pinMode(A1,INPUT);
  pinMode(A0,INPUT);
  Serial.begin(9600);
  BT.begin(9600);
}

void loop() {
 ppm=analogRead(A0);
 noise=digitalRead(4);
 smoke=analog
 Read(A1);
 BT.println(String(ppm)+","+String(smoke)+","+String(noise));
 delay(2000);
}
