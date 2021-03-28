import tensorflow as tf
from skimage.color import rgb2lab, lab2rgb, rgb2gray, gray2rgb
from tensorflow import keras
import numpy as np
import cv2
from skimage.io import imsave

from tensorflow.python.keras.backend import set_session
from tensorflow.keras.preprocessing.image import ImageDataGenerator, img_to_array, load_img
from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input
from skimage.transform import resize

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
    model = keras.models.load_model('../Model/color_model_V5.h5')



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


#     with inception.graph.as_default():
#         print("INCEP6")
#         embed = inception.predict(grayscaled_rgb_resized)
#         print("INCEP7")
    return embed





def getPredImg(img):
    img_resized = img_resized = resize(img, (256, 256, 3), mode='constant')
    print(img_resized.shape)

    print("HERE1")
    print(img_resized.shape)
    colorize = []
    colorize.append(img_resized)

    colorize = np.array(colorize, dtype=float)
    print(colorize.shape)
    print("HERE2")
    gray_imgs = gray2rgb(rgb2gray(1.0/255 * colorize))
    print("HERE3")
    colorize_embedings = create_inception_embedding(gray_imgs)
    print("HERE4")

    

    print('HERE6')

    colorize_resized = rgb2lab(1.0/255 * colorize)

    print('HERE7')

    colorize_resized = colorize_resized[:, :, :, 0] / 100
    print('HERE8')

    colorize_resized = colorize_resized.reshape(colorize_resized.shape+(1,))

    print(colorize_resized.shape)

    print('HERE9')

    with session.graph.as_default():
        set_session(session)
        output = model.predict([colorize_resized, colorize_embedings])
    print('HERE10')
    output = output * 128
    

    output = output[0]
    print(output.max())
    print(output.min())

    colorize_resized = colorize_resized[0]

    print(colorize_resized.min())
    print(colorize_resized.max())
    color_img = np.zeros((256, 256, 3))

    color_img[:, :, 0] = colorize_resized[:, :, 0] * 100
    color_img[:, :, 1:] = output

    # color_img = np.array(color_img, dtype=np.uint8)

    img_full_color = lab2rgb(color_img)

    return img_full_color

image = img_to_array(load_img("/Users/justinalbert/Code_Projects/Mechian Learning/Chroma/Model/data/testdata/Train/27gIpN.jpg"))

# image = rgb2lab(image)
# image = lab2rgb(image)

rgb_img = getPredImg(image)

imsave("./V5_img_1.png", rgb_img)