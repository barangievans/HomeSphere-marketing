from flask import Blueprint, request, jsonify
from models import db, House

house_routes = Blueprint('house_routes', __name__)

@house_routes.route('/houses', methods=['POST'])
def add_house():
    data = request.json
    new_house = House(address=data['address'], owner_id=data['owner_id'])
    db.session.add(new_house)
    db.session.commit()
    return jsonify({"message": "House added"}), 201
