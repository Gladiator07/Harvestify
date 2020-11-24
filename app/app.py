# Importing essential libraries
from flask import Flask, render_template, request, Markup
import pickle
import numpy as np
import pandas as pd
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
        
@app.route('/fertilizer-predict', methods=['POST'])
def fert_recommend():
    crop_name = str(request.form['cropname'])
    N = int(request.form['nitrogen'])
    P = int(request.form['phosphorous'])
    K = int(request.form['pottasium'])
    ph = float(request.form['ph'])

    df = pd.read_csv('../Data_final/FertilizerData.csv')

    nr = df[df['Crop']==crop_name]['N'].iloc[0]
    pr = df[df['Crop']==crop_name]['P'].iloc[0]
    kr = df[df['Crop']==crop_name]['K'].iloc[0]

    n = nr - N
    p = pr - P
    k = kr - K
    temp = {abs(n) : "N",abs(p) : "P", abs(k) :"K"}
    max_value = temp[max(temp.keys())]
    if max_value == "N":
        if n < 0 : 
            key = 'NHigh'
        else :
            key = "Nlow"
    elif max_value == "P":
        if p < 0 : 
            key = 'PHigh'
        else :
            key = "Plow"
    else :
        if k < 0 : 
            key = 'KHigh'
        else :
            key = "Klow"

    d = {
        'Nhigh':"""<h3>The N value of soil is high and might give rise to weeds<h3>. Please consider the following suggestions.<br/>1. Manure – adding manure is one of the simplest ways to amend your soil with nitrogen. Be careful as there are various types of manures with varying degrees of nitrogen.
        <br/>2. Coffee grinds – use your morning addiction to feed your gardening habit! Coffee grinds are considered a green compost material which is rich in nitrogen. Once the grounds break down, your soil will be fed with delicious, delicious nitrogen. An added benefit to including coffee grounds to your soil is while it will compost, it will also help provide increased drainage to your soil.
        <br/>3. Plant nitrogen fixing plants – planting vegetables that are in Fabaceae family like peas, beans and soybeans have the ability to increase nitrogen in your soil
        <br/>4. Plant ‘green manure’ crops""",

        'Nlow':"""The N value of your soil is low. Please consider the following suggestions.<br/>
        • Add sawdust or fine woodchips to your soil – the carbon in the sawdust/woodchips love nitrogen and will help absorb and soak up and excess nitrogen.
        <br/>• Plant heavy nitrogen feeding plants – tomatoes, corn, broccoli, cabbage and spinach are examples of plants that thrive off nitrogen and will suck the nitrogen dry.
        <br/>• Water – soaking your soil with water will help leach the nitrogen deeper into your soil, effectively leaving less for your plants to use.
        <br/>• Sugar – In limited studies, it was shown that adding sugar to your soil can help potentially reduce the amount of nitrogen is your soil. Sugar is partially composed of carbon, an element which attracts and soaks up the nitrogen in the soil. This is similar concept to adding sawdust/woodchips which are high in carbon content.
        <br/>• Do nothing – It may seem counter-intuitive, but if you already have plants that are producing lots of foliage, it may be best to let them continue to absorb all the nitrogen to amend the soil for your next crops.""",
    
        'PHigh':"""The P value of your soil is high. 
        <br/>• Avoid adding manure – manure contains many key nutrients for your soil but typically including high levels of phosphorous. Limiting the addition of manure will help reduce phosphorus being added.
        <br/>• Use only phosphorus-free fertilizer – if you can limit the amount of phosphorous added to your soil, you can let the plants use the existing phosphorus while still providing other key nutrients such as Nitrogen and Potassium. Find a fertilizer with numbers such as 10-0-10, where the zero represents no phosphorous.
        <br/>• Water your soil – soaking your soil liberally will aid in driving phosphorous out of the soil. This is recommended as a last ditch effort.""",
        
        'Plow': """The P value of your soil is low. Please consider the following options.
        <br/>1. Bone meal – a fast acting source that is made from ground animal bones which is rich in phosphorous.
        <br/>2. Rock phosphate – a slower acting source where the soil needs to convert the rock phosphate into phosphorous that the plants can use.
        <br/>3. Phosphorus Fertilizers – applying a fertilizer with a high phosphorous content in the NPK ratio (example: 10-20-10, 20 being phosphorous percentage)
        <br/>4. Organic compost – adding quality organic compost to your soil will help increase phosphoos content
        <br/>5. Manure – as with compost, manure can be an excellent source of phosphorous for your plants
        <br/>6. Clay soil – introducing clay particles into your soil can help retain & fix phosphorus deficiencies.
        <br/>7. Ensure proper soil pH – having a pH in the 6.0 to 7.0 range has been scientifically proven to have the optimal phosphorus uptake in plants""",
        
        'KHigh': """<br/> • Loosen the soil deeply with a shovel, and water thoroughly to dissolve water-soluble potassium. Allow the soil to fully dry, and repeat digging and watering the soil two or three more times.
        <br/>• Sift through the soil, and remove as many rocks as possible, using a soil sifter. Minerals occurring in rocks such as mica and feldspar slowly release potassium into the soil slowly through weathering.
        <br/>• Stop applying potassium-rich commercial fertilizer. Apply only commercial fertilizer that has a '0' in the final number field. Commercial fertilizers use a three number system for measuring levels of nitrogen, phosphorous and potassium. The last number stands for potassium. Another option is to stop using commercial fertilizers all together and to begin using only organic matter to enrich the soil.
        <br/>• Mix crushed eggshells, crushed seashells, wood ash or soft rock phosphate to the soil to add calcium. Mix in up to 10 percent of organic compost to help amend and balance the soil.
        """,
        
        'Klow': """
        <br/>• Mix in muricate of potash or sulphate of potash
        <br/>• Try kelp meal or seaweed
        <br/>• Try Sul-Po-Mag
        """
        }


    response =  Markup(str(d[key]))
    
        
    return render_template('fertilizer-result.html', recommendation=response)






if __name__ == '__main__':
	app.run(debug=True)