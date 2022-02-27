from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

def __repr__(self):
    return '<Task %r>' % self.id

@app.route('/admin_tekst.html')
def admin_tekst():
    return render_template("admin_tekst.html")

@app.route('/administratora_lapa.html')
def administratora_lapa():
    return render_template("administratora_lapa.html")

@app.route('/meklet_arstu.html')
def meklet_arstu():
    return render_template("meklet_arstu.html")

@app.route('/meklet_viziti.html')
def meklet_viziti():
    return render_template("meklet_viziti.html")

@app.route('/pieteikt_viziti.html')
def pieteikt_viziti():
    return render_template("pieteikt_viziti.html")

@app.route('/pievienot_arstu.html')
def pievienot_arstu():
    return render_template("pievienot_arstu.html")

@app.route('/pievienot_slimnicu.html')
def pievienot_slimnicu():
    return render_template("pievienot_slimnicu.html")

@app.route('/statistika.html')
def statistika():
    return render_template("statistika.html")

@app.route('/tekst.html')
def tekst():
    return render_template("tekst.html")

@app.route('/registracija.html')
def registracija():
    return render_template("registracija.html")

@app.route('/')
def login():
    return render_template("login.html")


@app.route('/index.html', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task_content = request.form['meklet']
        new_task = Todo(content=task_content)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/index.html')
        except:
            return 'There was an issue adding your task'

    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks=tasks)
        

@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was a problem deleting that task'

@app.route('/update/<int:id>', methods=['GET', 'POST'])

def update(id):
    task = Todo.query.get_or_404(id)

    if request.method == 'POST':
        pass

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating your task'


    else:
        return render_template('update.html')

if __name__ == "__main__":
    app.run(debug=True)