import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
df = pd.read_csv("Therapy.csv")
df = df.fillna("")

# Combine all text fields
df["combined_text"] = (
    df["Primary Concern"].astype(str) + " " +
    df["Secondary Symptoms"].astype(str) + " " +
    df["Communication Level"].astype(str) + " " +
    df["Behavioral Challenges"].astype(str) + " " +
    df["Social Interaction"].astype(str) + " " +
    df["Learning Challenges"].astype(str) + " " +
    df["Doctor Notes"].astype(str)
)

# Input & Labels
X = df["combined_text"]
y = df["Therapy Recommended"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# TF-IDF + Random Forest Pipeline
model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("rf", RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        max_depth=10
    ))
])

# Train the model
model.fit(X_train, y_train)

# Accuracy
pred = model.predict(X_test)
print("Random Forest Accuracy:", accuracy_score(y_test, pred))

# Save model
joblib.dump(model, "therapy_rf_model.pkl")

print("Model saved as therapy_rf_model.pkl")