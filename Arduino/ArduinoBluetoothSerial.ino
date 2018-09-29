int ppm=0;
int noise=0;

void setup() {
  pinMode(4,OUTPUT);
  pinMode(A0,OUTPUT);
  Serial.begin(9600);
}

void loop() {
 ppm=analogRead(A0);
 noise=digitalRead(4);
 Serial.println(String(ppm)+","+String(noise));
}
