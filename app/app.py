# Importing essential libraries
from flask import Flask, render_template, request
import pickle
import numpy as np

# Load the Random Forest CLassifier model
filename = '../Trained_Model/RandomForest.pkl'
classifier = pickle.load(open(filename, 'rb'))

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')


@app.route('/crop_prediction')
def crop_prediction():
	return render_template('crop.html')

@app.route('/fertilizer')
def fertilizer_recommendation():
	return render_template('fertilizer.html')

@app.route('/disease')
def disease_prediction():
	return render_template('disease.html')
# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         N = int(request.form['nitrogen'])
#         P = int(request.form['phosphorous'])
#         K = int(request.form['pottasium'])
#         temperature = float(request.form['temperature'])
#         humidity = float(request.form['humidity'])
#         ph = float(request.form['ph'])
#         rainfall = float(request.form['rainfall'])
        
        
#         data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
#         my_prediction = classifier.predict(data)
#         final_prediction = my_prediction[0]
        
#         return render_template('result.html', prediction=final_prediction)

if __name__ == '__main__':
	app.run(debug=True)