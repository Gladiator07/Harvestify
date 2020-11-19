# This script gives the current weather according to your location

# Fields of interests ==> Temperature, humidity, rainfall

import requests, json

api_key = "9d7cde1f6d07ec55650544be1631307e"

base_url  = "http://api.openweathermap.org/data/2.5/weather?"

city_name = input("Enter city name: ")

complete_url = base_url + "appid=" + api_key + "&q=" + city_name

response = requests.get(complete_url)
x = response.json()
print(x)

if x["cod"] != "404":
    y = x["main"]

    current_temperature = round((y["temp"] - 273.15), 2)
    current_pressure = y["pressure"]
    current_humidity = y["humidity"]
    rainfall = y["precipitation"]


    print("Rainfall (in degree celsius) = " + str(rainfall))

    # print("Atmospheric Pressure (in hPa unit) = " + type(current_pressure))
    # print("Humidity (in percentage) = " + type(current_humidity))
    
else:
    print("City not found")



