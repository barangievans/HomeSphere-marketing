from flask import Blueprint, request, jsonify
from models import db, User

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/signup', methods=['POST'])
def signup():
    data = request.json
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created"}), 201
