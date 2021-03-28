from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input
from flask import Flask, render_template, request, jsonify
from PIL import Image
from flask_cors import CORS, cross_origin
import os
import io
import sys
import numpy as np
from numpy import random
import cv2
import base64
from skimage.io import imsave
from tensorflow.keras.preprocessing.image import img_to_array, load_img

from skimage.transform import resize

import tensorflow as tf
from skimage.color import rgb2lab, lab2rgb, rgb2gray, gray2rgb
from tensorflow import keras


from tensorflow.python.keras.backend import set_session

import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()
# Load weights
# on thread 1
session = tf.Session(graph=tf.Graph())
with session.graph.as_default():
    set_session(session)
    inception = InceptionResNetV2(
        weights='./inceptionWeight/inception_resnet_v2_weights_tf_dim_ordering_tf_kernels.h5', include_top=True)
    inception.graph = tf.get_default_graph()
    model = keras.models.load_model('./color_model_V5.h5')


def create_inception_embedding(grayscaled_rgb):
    grayscaled_rgb_resized = []
    for i in grayscaled_rgb:
        i = resize(i, (299, 299, 3), mode='constant')
        grayscaled_rgb_resized.append(i)
    grayscaled_rgb_resized = np.array(grayscaled_rgb_resized)

    grayscaled_rgb_resized = preprocess_input(grayscaled_rgb_resized)

    with session.graph.as_default():
        set_session(session)

        embed = inception.predict(grayscaled_rgb_resized)

    return embed


def getPredImg(img, to_shape):
    img_resized = resize(img, (256, 256, 3), mode='constant')
  

    colorize = []
    colorize.append(img_resized)

    colorize = np.array(colorize, dtype=float)

    gray_imgs = gray2rgb(rgb2gray(1.0/255 * colorize))
  
    colorize_embedings = create_inception_embedding(gray_imgs)
  


    colorize_resized = rgb2lab(1.0/255 * colorize)


    colorize_resized = colorize_resized[:, :, :, 0] / 100
 
    colorize_resized = colorize_resized.reshape(colorize_resized.shape+(1,))

 
    with session.graph.as_default():
        set_session(session)
        output = model.predict([colorize_resized, colorize_embedings])
 
    output = output * 128
    

    output = output[0]
 

    colorize_resized = colorize_resized[0]


    color_img = np.zeros((256, 256, 3))

    color_img[:, :, 0] = colorize_resized[:, :, 0] * 100
    color_img[:, :, 1:] = output

    # print(color_img)
    # color_img = color_img.astype('uint8')
    # print(color_img)
    # img_full_color = cv2.cvtColor(color_img, cv2.COLOR_LAB2RGB)

    # color_img = np.array(color_img, dtype=np.uint8)

    img_full_color = lab2rgb(color_img)

    img_full_color = resize(img_full_color, to_shape, mode='constant')
    print(img_full_color.shape)

    imsave("./server_test.jpg", img_full_color)


    return img_full_color


print("READY")


server = Flask(__name__)
cors = CORS(server, resources={r"*": {"origins": "*"}})


@server.route('/colorize', methods=["GET", 'POST'])
def colorize():
   
    # # print(request.files , file=sys.stderr)

    file = request.files['file'].read()  # byte file


    npimg = np.frombuffer(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
   
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    imsave("./server_test.jpg", img)

    old_shape = img.shape

    img = img_to_array(load_img("./server_test.jpg"))
    

    # img = rgb2lab(img)
    # img = lab2rgb(img)
     

    img = getPredImg(img, old_shape)

    # img = np.array(img, dtype=float)
    # print(img)
    # img = np.array(img, dtype=int)

    img = img_to_array(load_img("./server_test.jpg"))
    img = np.array(img)
    
	

    isFieri = False;
    if (random.rand() < 0.1):
        img = cv2.imread('./guyfieri.jpg')
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = np.array(img)
        isFieri = True;
    img = Image.fromarray(img.astype("uint8"))
    rawBytes = io.BytesIO()
    img.save(rawBytes, "JPEG")
    rawBytes.seek(0)
    img_base64 = base64.b64encode(rawBytes.read())
   
    return jsonify({'imageData':str(img_base64), 'isFieri': isFieri})


# @server.route('/test', methods=['GET', "POST"])
# def test():
# 	print("MADE IT HERE")
# 	data = request.get_json()
# 	print(data)
# 	return jsonify(data), 200


if __name__ == '__main__':
    server.run(debug=True, host='0.0.0.0')

