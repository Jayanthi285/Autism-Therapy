from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("therapy_rf_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    text = (
        data.get("primary_concern", "") + " " +
        data.get("secondary_symptoms", "") + " " +
        data.get("communication", "") + " " +
        data.get("behavior", "") + " " +
        data.get("social_skills", "") + " " +
        data.get("learning", "") + " " +
        data.get("notes", "")
    )

    prediction = model.predict([text])[0]

    return jsonify({"recommended_therapy": prediction})

if __name__ == "__main__":
    app.run(debug=True)
