
///* Comment this out to disable prints and save space */
//#define BLYNK_PRINT Serial
//
//#include <ESP8266WiFi.h>
//#include <BlynkSimpleEsp8266.h>
//
//// You should get Auth Token in the Blynk App.
//// Go to the Project Settings (nut icon).
//char auth[] = "8KiWTcQqD3uTyGwx2dfvaGkxUqrkiE-s";
//
//// Your WiFi credentials.
//// Set password to "" for open networks.
//char ssid[] = "City net 4mb34  03142020000";
//char pass[] = "14280114";
//
//void setup()
//{
//// Debug console
//Serial.begin(9600);
//
//Blynk.begin(auth, ssid, pass);
//// You can also specify server:
////Blynk.begin(auth, ssid, pass, "blynk-cloud.com", 80);
////Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);
//}
//
//void loop()
//{
//Blynk.run();
////Serial.println("YES");
//// You can inject your own code or combine it with other sketches.
//// Check other examples on how to communicate with Blynk. Remember
//// to avoid delay() function!
//}
//





//#include <ESP8266WiFi.h>
//#include <ESP8266HTTPClient.h>
// 
//const char* ssid = "City net 4mb34  03142020000";
//const char* password = "14280114";
// 
//void setup () {
// 
//Serial.begin(9600);
//WiFi.begin(ssid, password);
// 
//while (WiFi.status() != WL_CONNECTED) {
// 
//delay(1000);
//Serial.print("Connecting..");
// 
//}
// 
//}
// 
//void loop() {
// 
//if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
// 
//HTTPClient http;  //Declare an object of class HTTPClient
// 
////http.begin("http://jsonplaceholder.typicode.com/users/1");  //Specify request destination
//http.begin("http://192.168.0.100:4000/");  //Specify request destination
//int httpCode = http.GET();                                                                  //Send the request
// 
//if (httpCode > 0) { //Check the returning code
// 
//String payload = http.getString();   //Get the request response payload
//Serial.println(payload);                     //Print the response payload
// 
//}
// 
//http.end();   //Close connection
// 
//}
// 
//delay(30000);    //Send a request every 30 seconds
// 
//}











#include <SoftwareSerial.h>

#include <DallasTemperature.h>
#include <OneWire.h>


//ESP8266 WIFI MODULE
#include <ESP8266WiFi.h>

#include <TinyGPS++.h> // library for GPS module

#define ONE_WIRE_BUS 0  //D2 pin of nodemcu
#define pulsePin A0




SoftwareSerial ss(4, 5); // The serial connection to the GPS deviceconst char* ssid = "City net 4mb34  03142020000";
const char* ssid = "City net 4mb34  03142020000";
const char* password = "14280114";
float latitude , longitude;
int year , month , date, hour , minute , second;
String date_str , time_str , lat_str , lng_str;
int pm;
WiFiServer server(80);


// NEO-6M GPS MODULE
// NEO-6M GPS LAT LONG CONVERTING LIBRARY

TinyGPSPlus gps;  // The TinyGPS++ object



// PULSE RATE SENSOR
// PULSE RATE SENSOR XD-58C PIN DEFINITION




//TEMRATURE SENSOR DS18B20
//TEMRATURE SENSOR DS18B20 LIBRARIES


OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);  // Pass the oneWire reference to Dallas Temperature.


// PULSE  RATE SENSOR VARIABLES INITIALIZED.....
int rate[10];                    
unsigned long sampleCounter = 0; 
unsigned long lastBeatTime = 0;  
unsigned long lastTime = 0, N;
int BPM = 0;
int IBI = 0;
int P = 512;
int T = 512;
int thresh = 512;  
int amp = 100;                   
int Signal;
boolean Pulse = false;
boolean firstBeat = true;          
boolean secondBeat = true;
boolean QS = false;   



void setup()
{
  
  Serial.begin(9600);
  delay(1000);  //added to give the onewire stuff time to initialize.
  sensors.begin();
  sensors.requestTemperatures();                // Send the command to get temperatures
  
  ss.begin(9600);

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password); //connecting to wifi
  while (WiFi.status() != WL_CONNECTED)// while wifi not connected
  {
    delay(500);
    Serial.print("."); //print "...."
  }
  Serial.println("");
  Serial.println("WiFi connected");
  server.begin();
  Serial.println("Server started");
  Serial.println(WiFi.localIP());  // Print the IP address
  
}





// PULSE  RATE SENSOR METHODS DEFINED.....

void readPulse() {

  Signal = analogRead(pulsePin);              
  sampleCounter += 2;                           
  int N = sampleCounter - lastBeatTime;   

  detectSetHighLow();

  if (N > 250) {  
    if ( (Signal > thresh) && (Pulse == false) && (N > (IBI / 5) * 3) )
      pulseDetected();
  }

  if (Signal < thresh && Pulse == true) {  
    Pulse = false;
    amp = P - T;
    thresh = amp / 2 + T;  
    P = thresh;
    T = thresh;
  }

  if (N > 2500) {
    thresh = 512;
    P = 512;
    T = 512;
    lastBeatTime = sampleCounter;
    firstBeat = true;            
    secondBeat = true;           
  }

}

void detectSetHighLow() {

  if (Signal < thresh && N > (IBI / 5) * 3) {
    if (Signal < T) {                       
      T = Signal;                         
    }
  }

  if (Signal > thresh && Signal > P) {    
    P = Signal;                           
  }                                       

}

void pulseDetected() {
  Pulse = true;                           
  IBI = sampleCounter - lastBeatTime;     
  lastBeatTime = sampleCounter;           

  if (firstBeat) {                       
    firstBeat = false;                 
    return;                            
  }
  if (secondBeat) {                    
    secondBeat = false;                
    for (int i = 0; i <= 9; i++) {   
      rate[i] = IBI;
    }
  }

  word runningTotal = 0;                   

  for (int i = 0; i <= 8; i++) {          
    rate[i] = rate[i + 1];            
    runningTotal += rate[i];          
  }

  rate[9] = IBI;                      
  runningTotal += rate[9];            
  runningTotal /= 10;                 
  BPM = 60000 / runningTotal;         
  QS = true;
                              
}





void loop()
{
  // GPS WORKING.....
  while (ss.available() > 0) //while data is available
    if (gps.encode(ss.read())) //read gps data
    {
      if (gps.location.isValid()) //check whether gps location is valid
      {
        latitude = gps.location.lat();
        lat_str = String(latitude , 6); // latitude location is stored in a string
        longitude = gps.location.lng();
        lng_str = String(longitude , 6); //longitude location is stored in a string
      }
      if (gps.date.isValid()) //check whether gps date is valid
      {
        date_str = "";
        date = gps.date.day();
        month = gps.date.month();
        year = gps.date.year();
        if (date < 10)
          date_str = '0';
        date_str += String(date);// values of date,month and year are stored in a string
        date_str += " / ";

        if (month < 10)
          date_str += '0';
        date_str += String(month); // values of date,month and year are stored in a string
        date_str += " / ";
        if (year < 10)
          date_str += '0';
        date_str += String(year); // values of date,month and year are stored in a string
      }
      if (gps.time.isValid())  //check whether gps time is valid
      {
        time_str = "";
        hour = gps.time.hour();
        minute = gps.time.minute();
        second = gps.time.second();
        minute = (minute + 30); // converting to IST
        if (minute > 59)
        {
          minute = minute - 60;
          hour = hour + 1;
        }
        hour = (hour + 5) ;
        if (hour > 23)
          hour = hour - 24;   // converting to IST
        if (hour >= 12)  // checking whether AM or PM
          pm = 1;
        else
          pm = 0;
        hour = hour % 12;
        if (hour < 10)
          time_str = '0';
        time_str += String(hour); //values of hour,minute and time are stored in a string
        time_str += " : ";
        if (minute < 10)
          time_str += '0';
        time_str += String(minute); //values of hour,minute and time are stored in a string
        time_str += " : ";
        if (second < 10)
          time_str += '0';
        time_str += String(second); //values of hour,minute and time are stored in a string
        if (pm == 1)
          time_str += " PM ";
        else
          time_str += " AM ";
      }
    }


  // PULSE  RATE SENSOR WORKING.....
  if (QS == true) {
   Serial.println("BPM: "+ String(BPM));
   QS = false;
   } else if (millis() >= (lastTime + 2)) {
     readPulse(); 
     lastTime = millis();
   }

  // TEMPRATURE SENSOR WORKING.....
    
  Serial.println("Temperature is: ");
  Serial.println(sensors.getTempCByIndex(0));   // Why "byIndex"? You can have more than one IC on the same bus. 0 refers to the first IC on the wire


 // SENDING DATA TO API OVER WIFI .....
 WiFiClient client = server.available(); // Check if a client has connected
  if (!client)
  {
    return;
  }
  // Prepare the response
  String s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n <!DOCTYPE html> <html> <head> <title>GPS DATA</title> <style>";
  s += "a:link {background-color: YELLOW;text-decoration: none;}";
  s += "table, th, td </style> </head> <body> <h1  style=";
  s += "font-size:300%;";
  s += " ALIGN=CENTER> GPS DATA</h1>";
  s += "<p ALIGN=CENTER style=""font-size:150%;""";
  s += "> <b>Location Details</b></p> <table ALIGN=CENTER style=";
  s += "width:50%";
  s += "> <tr> <th>Latitude</th>";
  s += "<td ALIGN=CENTER >";
  s += lat_str;
  s += "</td> </tr> <tr> <th>Longitude</th> <td ALIGN=CENTER >";
  s += lng_str;
  s += "</td> </tr> <tr>  <th>Date</th> <td ALIGN=CENTER >";
  s += date_str;
  s += "</td></tr> <tr> <th>Time</th> <td ALIGN=CENTER >";
  s += time_str;
  s += "</td></tr> <tr> <th>PULSE</th> <td ALIGN=CENTER >";
  s += BPM;
  s += "</td></tr> <tr> <th>TEMPRATURE</th> <td ALIGN=CENTER >";
  s += sensors.getTempCByIndex(0);
  s += "</td></tr> </table> ";
  s += "</body> </html>";

  client.print(s); // all the values are send to the webpage
  delay(1000);
}
