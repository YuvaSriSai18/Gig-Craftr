from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import random
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
import json

# Initialize Flask app
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app, resources={r"/predict": {"origins": "*"}})

# Load the intents and model data
with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "data.pth"
data = torch.load(FILE)

# Extract model parameters
input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

# Initialize and load the model
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

# Bot name
bot_name = "Sam"

# Function to get the chatbot response
def get_response(msg):
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])
    
    return "I do not understand..."

# Define a route for the chatbot API
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from request
    data = request.get_json()

    # Get message from data
    message = data.get("message")
    
    if not message:
        return jsonify({"answer": "Error: No message provided"}), 400

    # Get chatbot response
    response = get_response(message)
    
    # Return the chatbot's response as JSON
    return jsonify({"answer": response}), 200

# Start the Flask app
if __name__ == "__main__":
    app.run(debug=True)
