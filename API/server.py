from flask import Flask, render_template , request , jsonify
from PIL import Image
from flask_cors import CORS, cross_origin
import os , io , sys
import numpy as np 
import cv2
import base64


server = Flask(__name__)
cors = CORS(server, resources={r"*": {"origins": "*"}})


@server.route('/colorize', methods=["GET",'POST'])
def colorize():
	print("SHTING OU ARE A SHITN")
    # # print(request.files , file=sys.stderr)


	
	file = request.files['file'].read() ## byte file

	print("MADE IT HERE")
	npimg = np.fromstring(file, np.uint8)
	img = cv2.imdecode(npimg,cv2.IMREAD_COLOR)
	print("NOW WE ARE GETTING SOMEWHERE")

	img = Image.fromarray(img.astype("uint8"))
	rawBytes = io.BytesIO()
	img.save(rawBytes, "JPEG")
	rawBytes.seek(0)
	img_base64 = base64.b64encode(rawBytes.read())
	print("WOW THE END")
	return jsonify({'status':str(img_base64)})


@server.route('/test', methods=['GET', "POST"])
def test():
	print("MADE IT HERE")
	data = request.get_json()
	print(data)
	return jsonify(data), 200


if __name__ == '__main__':
    server.run(debug=True)

