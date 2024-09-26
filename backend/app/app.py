from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data to simulate a database
houses = []
landlords = []

@app.route('/api/listings', methods=['GET'])
def listings():
    return jsonify(houses), 200

@app.route('/api/post-house', methods=['POST'])
def post_house():
    data = request.json
    if not data or 'title' not in data or 'category' not in data or 'deposit' not in data or 'rent' not in data:
        return jsonify({'error': 'Invalid data'}), 400

    house_id = len(houses) + 1
    new_house = {
        'id': house_id,
        'title': data['title'],
        'category': data['category'],
        'deposit': data['deposit'],
        'rent': data['rent'],
        'is_booked': False,
        'landlord_id': data.get('landlord_id')  # Optional: link to the landlord
    }
    
    houses.append(new_house)
    return jsonify({'message': 'House posted successfully!', 'house': new_house}), 201

# More endpoints...

if __name__ == '__main__':
    app.run(debug=True)
