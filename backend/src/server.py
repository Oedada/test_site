from flask import Flask, jsonify
import json
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

@app.route('/check_login', methods=["POST"])
def check_login():
    try:
        with open("data/users.json", "r") as f:
            data = json.load(f)
            received_data = request.get_json()
            if received_data["login"] not in data.keys():
                return jsonify({"acces": "false", "error": "invalid credentials"}), 401
            else:
                if data[received_data["login"]] == received_data["password"]:
                    return jsonify({"acces": "true", "error": "null"}), 201
                else:
                    return jsonify({"acces": "false", "error": "invalid credentials"}), 401
    except  Exception as e:
        return jsonify({"acces": "false", "error": str(e)}), 500


if __name__ == "__main__":
    app.run("localhost", 6969)
