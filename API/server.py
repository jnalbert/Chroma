from flask import Flask

server = Flask(__name__)

@server.route('/colorize', methods=['GET', 'POST'])
def picture():
    

if __name__ == '__main__':
    server.run()