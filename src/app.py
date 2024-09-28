from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_word():
    return "<p>Esse vai ser um site de pet<p>"

