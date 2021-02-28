from flask import Flask, render_template , request , jsonify
from PIL import Image
from flask_cors import CORS
import os , io , sys
import numpy as np 
import cv2
import base64


server = Flask(__name__)
CORS(server)

@server.route('/colorize', methods=['POST'])
def colorize():
    # # print(request.files , file=sys.stderr)
	# base64image = request.json['image']
	file = request.files['image'].read() ## byte file

	print("MADE IT HERE")
	npimg = np.fromstring(file, np.uint8)
	img = cv2.imdecode(npimg,cv2.IMREAD_COLOR)
	

	img = Image.fromarray(img.astype("uint8"))
	rawBytes = io.BytesIO()
	img.save(rawBytes, "JPEG")
	rawBytes.seek(0)
	img_base64 = base64.b64encode(rawBytes.read())
	print("Made it here")
	return jsonify({'status':str(img_base64)})


if __name__ == '__main__':
    server.run(debug=True)