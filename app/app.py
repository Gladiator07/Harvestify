# Importing essential libraries
from flask import Flask, render_template, request
import pickle
import numpy as np
import requests, json
# Load the Random Forest CLassifier model
filename = '../Trained_Model/RandomForest.pkl'
classifier = pickle.load(open(filename, 'rb'))

app = Flask(__name__)

def weather_fetch(city_name):
    api_key = "9d7cde1f6d07ec55650544be1631307e"
    base_url  = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None

        


@app.route('/')
def home():
	return render_template('index.html')


@app.route('/crop-recommend')
def crop_recommend():
	return render_template('crop.html')

@app.route('/fertilizer')
def fertilizer_recommendation():
	return render_template('fertilizer.html')

@app.route('/disease')
def disease_prediction():
	return render_template('disease.html')

	
@app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    if request.method == 'POST':
        N = int(request.form['nitrogen'])
        P = int(request.form['phosphorous'])
        K = int(request.form['pottasium'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])
        
        
        
        # state = request.form.get("stt")
        city = request.form.get("city")
        
        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
            my_prediction = classifier.predict(data)
            final_prediction = my_prediction[0]

            return render_template('crop-result.html', prediction=final_prediction)
            
        else:
           
            return render_template('try_again.html')
        

        






if __name__ == '__main__':
	app.run(debug=True)