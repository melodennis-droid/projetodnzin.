# backend.py
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Simula um banco de dados
produtos = [
    {"id": 1, "nome": "Produto A", "preco": 10.0},
    {"id": 2, "nome": "Produto B", "preco": 20.0}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    return jsonify(produtos)

@app.route('/produtos', methods=['POST'])
def adicionar_produto():
    novo = request.get_json()
    novo['id'] = len(produtos) + 1
    produtos.append(novo)
    return jsonify(novo), 201

if __name__ == "__main__":
    app.run(debug=True)