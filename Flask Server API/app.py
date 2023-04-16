from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model from a pickle file
with open('heart_disease_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(silent=True, force=True)
    
    age = float(data['Age'])
    sex = float(data['Sex'])
    cp = float(data['ChestPainType'])
    trestbps = float(data['BP'])
    chol = float(data['Cholesterol'])
    fbs = float(data['FBS'])
    restecg = float(data['EKGResults'])
    thalach = float(data['MaxHR'])
    exang = float(data['ExerciseAngina'])
    oldpeak = float(data['STDepression'])
    slope = float(data['SlopeOfST'])
    ca = float(data['NumVessels'])
    thal = float(data['Thallium'])
    
    input = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
    predict = model.predict(input)

    if predict[0] == 0: output = 'Not Present'
    else: output = 'Present'
        
    return  output 

if __name__ == '__main__':
    app.run(debug=True)
